import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Ensure this only runs on the client
    if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", updateMousePosition);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);

  return mousePosition;
};

export default useMousePosition;
