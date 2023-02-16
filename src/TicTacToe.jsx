import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Button from '@mui/material/Button';

export function TicTacToe() {
  const [board,setboard]=useState(Array(9).fill(null))
  const[isXturn,setXturn]=useState(true)
  const handclick=(index)=>{
    
   if (!winner &&board[index]===null){

    const boardcopy=[...board];
    boardcopy[index]=isXturn?"x":"o";
    setboard(boardcopy);
    setXturn(!isXturn)
   } 
  
  }
  const decidewinner=(board)=>{
    const line=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      
      for(let i=0; i<line.length;i++){
        const [a,b,c]= line[i];
      if(board[a]!=null&&  board[a]===board[b]&&board[b]===board[c])
  { console.log("winner" ,board[a])

return board[a]}
       
      }
      return null;
    };
       const winner= decidewinner(board); 
       const { width, height } = useWindowSize()
       const Restartgame=()=>{
setboard(Array(9).fill(null));
setXturn(true)
       }
  return (
    
    <div className="tic-toe">
      {winner?<Confetti width={width} height={height} gravity={0.1} />:null }
      <h2>TicTacToe Game</h2>
      <div className="board">
      {board.map((val,index)=>(
      < Gamebox val={val} onplayerclick={()=>handclick(index)}/>))}
     
      </div>
      <Button className="button" variant="contained" onClick={Restartgame}>Restart</Button>
     { winner ?<h1>The Winner is:{winner}</h1>:null}
    </div>
  );

}
function Gamebox({val,onplayerclick}){
  
  
  const style={
    color: val==="x"?"green":"red"
  }
return (<div className="game-box" onClick={onplayerclick} style={style}>{val}</div>
)

 
}