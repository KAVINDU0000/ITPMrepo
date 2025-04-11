const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user1000:User1000@itpm.mc5xu.mongodb.net/ITPM?retryWrites=true&w=majority&appName=ITPM",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB; 