import './Tictactoe.css';

const Tictactoe = (props) => {
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

      <div className='row1'>
        <div className='buttons' ></div>
        <div className='buttons'></div>
        <div className='buttons'></div>
      </div>
      <div className='row2'></div>
      <div className='row3'></div>
    </div>
  );
}
export default Tictactoe;