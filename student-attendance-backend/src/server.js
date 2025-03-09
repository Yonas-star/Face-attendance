"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)()); // Enable CORS for the frontend
app.use(body_parser_1.default.json({ limit: '10mb' })); // To handle large image data
// POST endpoint to receive the image for attendance
app.post('/api/attendance', (req, res) => {
    const { image } = req.body; // Get the base64 image sent from the frontend
    // For now, simulate a response (Facial recognition would go here)
    console.log('Received image for attendance');
    // Simulating a match and marking the student as present
    if (image) {
        // You can add facial recognition logic here (OpenCV, DeepFace, etc.)
        res.json({ message: 'Student marked as present!' });
    }
    else {
        res.status(400).json({ message: 'No image provided.' });
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
