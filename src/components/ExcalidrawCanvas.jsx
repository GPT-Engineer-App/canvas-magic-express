import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

const ExcalidrawCanvas = () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.process) {
      window.process = { env: { NODE_ENV: import.meta.env.MODE } };
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      <Excalidraw />
    </div>
  );
};

export default ExcalidrawCanvas;
