# ITPM Backend

This is the backend for the ITPM (Intelligent Training Pet Management) system.

## Project Structure

```
itpmbackend/
├── src/
│   ├── config/           # Configuration files
│   │   ├── db.config.js  # Database configuration
│   │   └── server.config.js # Server configuration
│   ├── controllers/      # Controllers for handling business logic
│   │   ├── messageController.js
│   │   ├── petController.js
│   │   ├── reportController.js
│   │   └── trainingVideoController.js
│   ├── middleware/       # Middleware functions
│   │   └── errorHandler.js
│   ├── models/           # Database models
│   │   ├── Pet.js
│   │   └── TrainingVideo.js
│   ├── routes/           # API routes
│   │   ├── messageRoutes.js
│   │   ├── petRoutes.js
│   │   ├── reportRoutes.js
│   │   └── trainingVideoRoutes.js
│   ├── services/         # Service layer (for future use)
│   ├── utils/            # Utility functions
│   │   └── helpers.js
│   ├── app.js            # Express application setup
│   └── server.js         # Server entry point
├── package.json
└── README.md
```

## API Endpoints

### Pets
- `GET /api/pets` - Get all pets (with optional filtering by customer name)
- `POST /api/pets` - Create a new pet
- `PUT /api/pets/:id` - Update a pet
- `DELETE /api/pets/:id` - Delete a pet
- `GET /api/pets/check` - Check if a pet exists

### Training Videos
- `GET /api/training-videos/pet/:id` - Get training videos for a specific pet
- `GET /api/training-videos/all` - Get all training videos

### Reports
- `GET /api/report` - Generate reports

### Messages
- `POST /api/messages/send` - Send a message

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```

## Environment Variables
Create a `.env` file in the root directory with the following variables:
```
PORT=3001
NODE_ENV=development
INFOBIP_API_URL=https://api.infobip.com/sms/1/text/query
INFOBIP_API_KEY=your-api-key
``` 