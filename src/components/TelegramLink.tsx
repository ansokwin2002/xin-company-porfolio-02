import React from 'react';

const TelegramLink: React.FC = () => {
  return (
    <a
      href="https://t.me/your_username" // <-- Replace with your Telegram link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-transparent hover:opacity-80 transition-all duration-300 z-40"
      aria-label="Contact on Telegram"
    >
      <img src="/assets/images/telegram-logo.png" alt="Telegram" className="w-12 h-12" />
    </a>
  );
};

export default TelegramLink;
