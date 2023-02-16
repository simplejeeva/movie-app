
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete'; 
import MailIcon from '@mui/icons-material/Mail';

import Badge from '@mui/material/Badge';

export function Count() {
  const [like, setLike] = useState(0);
  const [Dislike, setDisLike] = useState(0);
  return (
    <div className="like">
     
       <IconButton  onClick={() => setLike(like + 1)} color="primary" aria-label="delete">
       <Badge badgeContent={like} color="primary">
      👍
    </Badge>
        </IconButton>
     
      <IconButton onClick={() => setDisLike(Dislike + 1)}  aria-label="delete">
      <Badge badgeContent={Dislike} color="error">
       👎 
    </Badge>
     
       </IconButton>
      
      
    </div>
  );
}
