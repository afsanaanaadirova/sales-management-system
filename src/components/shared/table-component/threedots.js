import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material//Popper';
import Icon from '../../../assets/images/icons/icon';
import DeleteModal from "../modal/delete-modal"
import ChangeStatusModal from "../modal/change-status-modal"


function ThreeDotsMenu(row) {
  const [deleteRowId, setDeleteRowId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false)
  };
  const closeSatusModal = () => {
    setShowStatusModal(false)
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        onClose={handleClose}
      >
       <Icon name="three-dots" color="#FFFFFF" size={14}/>
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
         <Icon name="triangle" color="#ccc" size={20}/>
         <div className='change-item-modal'>
      <div className='item-icon'> <Icon name="edit" color="#FFFFFF" size={14}/><span>Düzəliş et</span></div>
      <div className='item-icon' onClick={() => {
        setDeleteRowId(row.row.id);
        setShowDeleteModal(true)
        }
      }> <Icon name="delete" color="#FFFFFF" size={14}/><span>Sil</span></div>
      <div className='item-icon' onClick={() => {
        setDeleteRowId(row.row.id);
        showStatusModal ?  setShowStatusModal(false) :  setShowStatusModal(true)
        }
      }> <Icon name="change-status" color="#FFFFFF" size={14}/><span>Statusu dəyiş</span></div>
      {showStatusModal && (<ChangeStatusModal 
         showStatusModal={showStatusModal}  
         closeModal={closeSatusModal} 
         onClose={handleClose}
         deleteRowId={deleteRowId} 
         />)
       }
        </div>
      </Popper>
      {showDeleteModal && (<DeleteModal showDeleteModal={showDeleteModal}  onClose={handleClose}  closeModal={closeDeleteModal} deleteRowId={deleteRowId}/>)}

    </div>
  );
}

export default ThreeDotsMenu