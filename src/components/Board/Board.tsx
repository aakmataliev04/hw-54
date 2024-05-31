import Cell, {CellType} from './Cell/Cell';
import React from 'react';

interface BoardType {
  cells: CellType[],
  onCellClick: (index: number) => void
}


const Board: React.FC<BoardType> = ({ cells, onCellClick }) => {
  return (
    <div className={'board'}>

      {
        cells.map((cell, index) => {
          return (
            <Cell key={index} hasItem={cell.hasItem} clicked={cell.clicked} onCellClick={() => onCellClick(index)} />
            );
        })
      }
    </div>
  );
};

export default Board;