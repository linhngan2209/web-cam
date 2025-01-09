'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FPSDisplay = () => {
  const [fps, setFPS] = useState('Loading...');

  useEffect(() => {
    const fetchFPS = async () => {
      try {
        const response = await axios.get('http://160.22.122.122:8001/fps');
        setFPS(response.data.fps);
      } catch (error) {
        console.error('Error fetching FPS:', error);
        setFPS('Error fetching FPS');
      }
    };

    const intervalId = setInterval(fetchFPS, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return <p>FPS: {fps}</p>;
};

export default FPSDisplay;
