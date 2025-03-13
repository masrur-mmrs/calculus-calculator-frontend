import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 mt-4">
      <div className="w-4 h-4 rounded-full bg-white animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]" />
    </div>
  );
}

export default Loader;
