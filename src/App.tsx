import './App.css';
import Circle from "./Circle/Circle";
import {useState} from "react";
import './App.css';

function App() {
  const [circleNumber, setCircle] = useState([
    {number: [5, 11, 16, 23, 32]}
  ]);

  const sortNumber = (arr: number[]) => {
    let i, j, temp;

    for (i = 0; i < arr.length - 1; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };

  const generateRandomNumber = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const changeNumber = () => {
    const arrayNumber: number[] = [];


    for (let i = 0; i < 5; i++) {
      let randomNumber = generateRandomNumber(36, 5);

      arrayNumber.forEach((number) => {
        if (number === randomNumber) {
          randomNumber = generateRandomNumber(36, 5);
        }
      });

      arrayNumber.push(randomNumber);
    }

    setCircle([
      {number: sortNumber(arrayNumber)},
    ]);

  };

  return (
    <div className="App">
      <div>
        <button onClick={changeNumber}>New numbers</button>
      </div>
      <Circle number={circleNumber[0].number[0]}/>
      <Circle number={circleNumber[0].number[1]}/>
      <Circle number={circleNumber[0].number[2]}/>
      <Circle number={circleNumber[0].number[3]}/>
      <Circle number={circleNumber[0].number[4]}/>
    </div>
  );
}

export default App;
