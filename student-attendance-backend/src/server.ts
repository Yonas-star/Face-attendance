// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for the frontend
app.use(bodyParser.json({ limit: '10mb' })); // To handle large image data

// POST endpoint to receive the image for attendance
app.post('/api/attendance', (req: Request, res: Response) => {
  const { image } = req.body;  // Get the base64 image sent from the frontend

  // For now, simulate a response (Facial recognition would go here)
  console.log('Received image for attendance');

  // Simulating a match and marking the student as present
  if (image) {
    // You can add facial recognition logic here (OpenCV, DeepFace, etc.)
    res.json({ message: 'Student marked as present!' });
  } else {
    res.status(400).json({ message: 'No image provided.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
