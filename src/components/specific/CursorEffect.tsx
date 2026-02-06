import React, { useState, useEffect } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const delay = 60; // milliseconds
    let animationFrameId: number;

    const animateFollower = () => {
      setFollowerPosition(prevPos => ({
        x: prevPos.x + (position.x - prevPos.x) / 8, // Easing effect
        y: prevPos.y + (position.y - prevPos.y) / 8, // Easing effect
      }));
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    animationFrameId = requestAnimationFrame(animateFollower);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);


  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isClicked ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-blue opacity-70"></div>
      </div>

      {/* Follower Cursor */}
      <div
        className={`fixed z-[9998] pointer-events-none transition-transform duration-200 ease-out`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicked ? 1 : 0.6})`, // Smaller when not clicked
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-blue opacity-30 blur-sm"></div>
      </div>
    </>
  );
};

export default CursorEffect;

