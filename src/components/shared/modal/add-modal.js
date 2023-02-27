import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ButtonComponent from '../button/button';
import ButtonComponentCancel from '../button/secondary-button';
import "./delete-modal.css"
import "./add-modal.css"
import Icon from '../../../assets/images/icons/icon';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../features/invoice/invoiceSlice'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    }
  }
};
export default function AddModal({showAddModal,closeSatusModal}) {
  const dispatch = useDispatch();


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showAddModal}
        onClose={closeSatusModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showAddModal}>
          <Box sx={style}>
            <div className='add-modal--top'>
             <h4>Qaimə</h4>
              <Icon name="close" size={15} />
            </div>
            <div className='add-modal--selects'>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
            <label className='customer-select-label'>Müştəri</label>
            <Select
            //   value={amount}
            //   onChange={handleChangeAmount}
            className='customer-select'
            MenuProps={MenuProps}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Azər Azərov</em>
              </MenuItem>
              <MenuItem value={10}>Azər Azərov</MenuItem>
              <MenuItem value={20}>Azər Azərov</MenuItem>
              <MenuItem value={30}>Azər Azərov</MenuItem>
              <MenuItem value={10}>Azər Azərov</MenuItem>
              <MenuItem value={20}>Azər Azərov</MenuItem>
              <MenuItem value={30}>Azər Azərov</MenuItem>  
               <MenuItem value={10}>Azər Azərov</MenuItem>
              <MenuItem value={20}>Azər Azərov</MenuItem>
              <MenuItem value={30}>Azər Azərov</MenuItem>  
               <MenuItem value={10}>Azər Azərov</MenuItem>
              <MenuItem value={20}>Azər Azərov</MenuItem>
              <MenuItem value={30}>Azər Azərov</MenuItem>
            </Select>
            <Icon name="search" size={15} />
          </FormControl>
            </div>

          
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

