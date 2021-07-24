import React, { useEffect, useState } from 'react';
import scrollToBottom from 'src/hooks/scrollToBottom';
import './styles.scss';
import HomeButton from 'src/components/HomeButton';

const NotFound = () => {
  const shuffleArray = (array) => {
    const arraySlice = array.slice();
    return arraySlice.sort(() => 0.5 - Math.random());
  };
  const [array, setArray] = useState([
    {
      id: 1,
      value: '',
    },
    {
      id: 2,
      value: '',
    },
    {
      id: 3,
      value: <HomeButton />,
    },
    {
      id: 4,
      value: '4',
    },
    {
      id: 5,
      value: '',
    },
    {
      id: 6,
      value: '',
    },
    {
      id: 8,
      value: '0',
    },
    {
      id: 9,
      value: '4',
    },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [array]);

  const handleShuffle = () => setArray(shuffleArray(array));

  return (
    <div className="grid-404">
      {array.map((cell) => (
        <div key={cell.id} onClick={handleShuffle} className="grid-404__cell">{cell.value}</div>
      ))}
    </div>
  );
};

export default NotFound;
