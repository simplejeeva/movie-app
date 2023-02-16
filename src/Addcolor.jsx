import { useState } from 'react';
import Button from '@mui/material/Button';

export function Addcolor() {
  const [color, setcolor] = useState("");
  const styles = {
    backgroundColor: color
  };
  const [colorList, setcolorlist] = useState(["orange", "green", "black"]);
  return (

    <div>
      <input className='addcolor-box' style={styles}
        type="search" onChange={(event) => setcolor(event.target.value)}
        value={color} />{" "}
      <Button variant="contained" onClick={() => setcolorlist([...colorList, color])}>add color</Button>
      {colorList.map((clr) => (
        <Colorbox color={clr} />
      ))}

    </div>
  );
}
function Colorbox({ color }) {
  const style = {
    height: "25px",
    width: "245px",
    margin: "5px 0",
    background: color
  };
  return (
    <div style={style}>

    </div>
  );
}
