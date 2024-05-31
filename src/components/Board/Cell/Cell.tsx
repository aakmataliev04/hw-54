import React from 'react';
export interface CellType {
  hasItem: boolean;
  clicked: boolean;
  onCellClick?: () => void
}

const Cell: React.FC<CellType> = ({hasItem, clicked, onCellClick}) => {
  const checkForClass = `cell ${clicked ? 'clicked' : ''} ${hasItem ? 'has': ''}`;
  return (
    <div className={checkForClass} onClick={onCellClick}>
      {hasItem && clicked? 'O' : ''}
    </div>
  );
};

export default Cell;