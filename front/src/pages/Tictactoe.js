import './Tictactoe.css';
import { useState } from 'react';


const Tictactoe = (props) => {

  const [ button1, setButton1 ] = useState('');
  const [ button2, setButton2 ] = useState('');
  const [ button3, setButton3 ] = useState('');
  const [ button4, setButton4 ] = useState('');
  const [ button5, setButton5 ] = useState('');
  const [ button6, setButton6 ] = useState('');
  const [ button7, setButton7 ] = useState('');
  const [ button8, setButton8 ] = useState('');
  const [ button9, setButton9 ] = useState('');
  const [ player, setPlayer ] = useState(false);
  const [ isGameStarted, setIsGameStarted ] = useState(false);
  const [ isGameFinished, setIsGameFinished ] = useState(false);
  const [ displayText, setDisplayText ] = useState('Please Start the Game'); 

  const winValidator = () => {
    console.log('checking')
    // win situation 123, 147, 159, 258, 369, 357, 456, 789
    if ( button1 === 'O' && button2 === 'O' && button3 === 'O' ||
      button1 === 'O' && button4 === 'O' && button7 === 'O' ||
      button1 === 'O' && button5 === 'O' && button9 === 'O' ||
      button2 === 'O' && button5 === 'O' && button8 === 'O' ||
      button3 === 'O' && button6 === 'O' && button9 === 'O' ||
      button3 === 'O' && button5 === 'O' && button7 === 'O' ||
      button4 === 'O' && button5 === 'O' && button6 === 'O' ||
      button7 === 'O' && button8 === 'O' && button9 === 'O'
    ) {
      setIsGameFinished(true);
      displayTextSetter(player, isGameStarted, isGameFinished, 'O')
    } else if (
      button1 === 'X' && button2 === 'X' && button3 === 'X' ||
      button1 === 'X' && button4 === 'X' && button7 === 'X' ||
      button1 === 'X' && button5 === 'X' && button9 === 'X' ||
      button2 === 'X' && button5 === 'X' && button8 === 'X' ||
      button3 === 'X' && button6 === 'X' && button9 === 'X' ||
      button3 === 'X' && button5 === 'X' && button7 === 'X' ||
      button4 === 'X' && button5 === 'X' && button6 === 'X' ||
      button7 === 'X' && button8 === 'X' && button9 === 'X' 
    ) {
      setIsGameFinished(true);
      displayTextSetter(player, isGameStarted, isGameFinished, 'X')
    } else if (
      button1 !== '' &&
      button2 !== '' &&
      button3 !== '' &&
      button4 !== '' &&
      button5 !== '' &&
      button6 !== '' &&
      button7 !== '' &&
      button8 !== '' &&
      button9 !== '' 
      ) {
        setIsGameFinished(true);
        displayTextSetter(player, isGameStarted, isGameFinished, 'draw')
    }
  }

  const buttonHandler = (e, buttonNum, player, isGameStarted, isGameFinished) => {

    // 1. if game has been started?
    if (isGameStarted && !isGameFinished) {
      // 2. if game started, who is the player?
      if (!player) {
        // 3. depends on the player, place O or X in the box
        if(buttonNum === 'btn1') {
          setButton1('O');
          // 4. determine if the game has won or draw
          // 5. if game is finished, isGameFinished = true
          winValidator();
          // 6. display who is the winner
          setPlayer(!player)
        } else if (buttonNum === 'btn2') {
          setButton2('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn3') {
          setButton3('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn4') {
          setButton4('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn5') {
          setButton5('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn6') {
          setButton6('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn7') {
          setButton7('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn8') {
          setButton8('O');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn9') {
          setButton9('O');
          winValidator();
          setPlayer(!player)
        }
      } else {
        if(buttonNum === 'btn1') {
          setButton1('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn2') {
          setButton2('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn3') {
          setButton3('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn4') {
          setButton4('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn5') {
          setButton5('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn6') {
          setButton6('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn7') {
          setButton7('X')
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn8') {
          setButton8('X');
          winValidator();
          setPlayer(!player)
        } else if (buttonNum === 'btn9') {
          setButton9('X');
          winValidator();
          setPlayer(!player)
        }
      }
    } else {
      console.log('game not started')
    }
  }

  const startButtonHandler = (e) => {
    e.preventDefault()
    setIsGameStarted(true)
    displayTextSetter(player, isGameStarted, isGameFinished)
  }

  const resetButtonHandler = (e) => {
    e.preventDefault();
    setButton1('');
    setButton2('');
    setButton3('');
    setButton4('');
    setButton5('');
    setButton6('');
    setButton7('');
    setButton8('');
    setButton9('');
    setPlayer(false);
    setIsGameStarted(false);
    setIsGameFinished(false);
    displayTextSetter(player, isGameStarted, isGameFinished)
  }

  const displayTextSetter = (player, isGameStarted, isGameFinished, winner) => {
    if (winner === 'O') {
      return setDisplayText('Player O has won')
    } else if (winner === 'X') {
      return setDisplayText('Player X has won')
    } else if (winner === 'draw') {
      return setDisplayText('Draw Game')
    } else if (!isGameFinished && !isGameStarted){
      return setDisplayText('Please Start the Game')
    } else {
      return setDisplayText('game in progress')
    }
  }


  return (
    <div>
      <p>tictactoe page</p>
      <ol>
        <li>컴퓨터는 계산을 안해요. 2인용 게임</li>
        <li>리셋/스타트 버튼</li>
        <li>react 'state' 쓰기</li>
        <li>react onClick</li>
        <li>validator</li>
        <li>누가 이겼는지 표시해주기</li>
      </ol>

      <div>
        <h3>Tic Tac Toe</h3>
        <p>Status: {displayText}</p>
      </div>

      <div className='gameContainer'>
        <div className='row1'>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn1', player, isGameStarted, isGameFinished)}>{button1}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn2', player, isGameStarted, isGameFinished)}>{button2}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn3', player, isGameStarted, isGameFinished)}>{button3}</div>
        </div>
        <div className='row2'>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn4', player, isGameStarted, isGameFinished)}>{button4}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn5', player, isGameStarted, isGameFinished)}>{button5}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn6', player, isGameStarted, isGameFinished)}>{button6}</div>
        </div>
        <div className='row3'>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn7', player, isGameStarted, isGameFinished)}>{button7}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn8', player, isGameStarted, isGameFinished)}>{button8}</div>
          <div className='buttons' onClick={(e) => buttonHandler(e, 'btn9', player, isGameStarted, isGameFinished)}>{button9}</div>
        </div>
      </div>
      <div className='buttonContainer'>
        <button onClick={startButtonHandler}>Start</button>
        <button onClick={resetButtonHandler}>Reset</button>
      </div>

    </div>
  );
}
export default Tictactoe;