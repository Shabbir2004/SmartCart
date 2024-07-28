import React, { useEffect, useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex justify-center items-center h-64 sm:h-80 md:h-96">
      <img
        src={items[currentIndex].image}
        alt={items[currentIndex].title}
        className="object-contain max-h-full"
      />
    </div>
  );
};

export default Carousel;
