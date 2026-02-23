import React from 'react';

const TelegramLink: React.FC = () => {
  return (
    <a
      href="https://t.me/xin_qiyou"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-2 bg-transparent hover:opacity-80 transition-all duration-300 z-40"
      aria-label="Contact on Telegram"
    >
      <img src="/assets/images/Telegram.gif" alt="Telegram" className="w-20 h-20" />
    </a>
  );
};

export default TelegramLink;
