// src/components/WebcamCapture.tsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const WebcamCapture: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const capture = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
      sendToBackend(image);
    }
  };

  const sendToBackend = async (image: string | null) => {
    if (!image) return;

    try {
      setStatus('Sending image...');
      const response = await axios.post('http://localhost:5000/api/attendance', { image });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: 'environment',
        }}
      />
      <button onClick={capture}>Capture</button>
      {status && <p>{status}</p>}
      {imageSrc && <img src={imageSrc} alt="Captured" />}
    </div>
  );
};

export default WebcamCapture;
