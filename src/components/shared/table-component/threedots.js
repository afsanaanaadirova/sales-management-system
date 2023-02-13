import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material//Popper';
import Paper from '@mui/material/Paper';
import Icon from '../../../assets/images/icons/icon';


function ThreeDotsMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
       <Icon name="three-dots" color="#FFFFFF" size={14}/>
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
         <Icon name="triangle" color="#ccc" size={20}/>
         <div className='change-item-modal'>
      <div className='item-icon'> <Icon name="edit" color="#FFFFFF" size={14}/><span>Düzəliş et</span></div>
      <div className='item-icon'> <Icon name="delete" color="#FFFFFF" size={14}/><span>Sil</span></div>
      <div className='item-icon'> <Icon name="change-status" color="#FFFFFF" size={14}/><span>Statusu dəyiş</span></div>
        </div>
      </Popper>
    </div>
  );
}

export default ThreeDotsMenu