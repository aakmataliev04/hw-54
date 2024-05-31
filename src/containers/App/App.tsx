import './App.css';
import {useState} from 'react';
import Board from '../../components/Board/Board';
import Counter from '../../components/Counter/Counter';
import ResetBtn from '../../components/ResetBtn/ResetBtn';


const createItems = () => {
  const Items = [];
  // eslint-disable-next-line for-direction
  for (let i = 0; i < 36; i++) {
    const cell = {hasItem: false, clicked: false};
    Items.push(cell);
  }
  Items[Math.floor(Math.random()*36)].hasItem = true;
  return Items;
};

const App = () => {

  const [items, setItems] = useState(createItems());
  const [foundItem, setFoundItem] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const onCellClick = (index: number) => {
    if (foundItem || items[index].clicked === true) return null;
    setItems((prevItems) => {
      const copyItems = [...prevItems];
      copyItems[index] = {...copyItems[index], clicked: true};
      return copyItems;
    });

    setCounterValue((prevState) => prevState+1);

    if (items[index].hasItem) {
      setFoundItem(true);
      alert("You win!");
    }
  };
  const reset = () => {
    setItems(createItems());
    setFoundItem(false);
    setCounterValue(0);
  };

    return (
        <>
        <Board cells={items} onCellClick={onCellClick}/>
        <Counter counter={counterValue} />
        <ResetBtn onResetBtn={reset} />
        </>
    );
};

export default App;
