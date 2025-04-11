const axios = require('axios');

// Constants for Infobip API
const INFOBIP_API_URL = process.env.INFOBIP_API_URL || 'https://api.infobip.com/sms/1/text/query';
const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY || 'your-api-key';

// Send message
exports.sendMessage = async (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    const response = await axios.post(
      INFOBIP_API_URL,
      {
        messages: [
          {
            destinations: [{ to: phoneNumber }],
            from: "YourSenderID",
            text: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `App ${INFOBIP_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message", details: error.message });
  }
}; 