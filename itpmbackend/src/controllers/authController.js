const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Signup (Regular)
exports.signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Validate input
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = new User({ fullName, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login (Regular)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user || !user.password || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Success: return user data
    res.json({
      message: 'Login successful',
      user: { id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Google Signup
exports.googleSignup = async (req, res) => {
  try {
    const { googleIdToken } = req.body;

    if (!googleIdToken) {
      return res.status(400).json({ message: 'Google ID token is required' });
    }

    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: googleIdToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub: googleId, email, name: fullName } = payload;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      if (user.googleId && user.googleId !== googleId) {
        return res.status(400).json({ message: 'Email associated with a different Google account' });
      }
      if (!user.googleId) {
        // Link Google ID to existing user
        user.googleId = googleId;
        await user.save();
      }
      return res.status(400).json({ message: 'User already exists. Please log in.' });
    }

    // Create new user
    user = new User({
      fullName,
      email,
      googleId,
    });
    await user.save();

    res.status(201).json({ message: 'Google signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Google Login
exports.googleLogin = async (req, res) => {
  try {
    const { googleIdToken } = req.body;

    if (!googleIdToken) {
      return res.status(400).json({ message: 'Google ID token is required' });
    }

    // Verify Google ID token
    const ticket = await client.verifyIdToken({
      idToken: googleIdToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub: googleId, email, name: fullName } = payload;

    // Find user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found. Please sign up first.' });
    }

    if (user.googleId !== googleId) {
      return res.status(400).json({ message: 'Invalid Google account' });
    }

    // Success: return user data
    res.json({
      message: 'Google login successful',
      user: { id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};