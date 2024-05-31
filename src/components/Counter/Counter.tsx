import React, {CSSProperties} from 'react';

interface CounterType {
  counter: number
}
const Counter: React.FC<CounterType> = ({counter}) => {
  const counterValueCss: CSSProperties = {
    color: 'wheat',
    fontWeight: '800'
  };
  return (
    <div>
      Попытка: <span style={counterValueCss}>{counter}</span>
    </div>
  );
};

export default Counter;