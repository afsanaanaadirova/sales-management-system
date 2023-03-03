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
const NewIcon = (props) => (
  <svg {...props}  width="14" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.625003 0.532959C0.790707 0.533104 0.949572 0.599048 1.06667 0.716292L4.26334 3.91296C4.36007 4.00972 4.47491 4.08647 4.60131 4.13883C4.72771 4.1912 4.86319 4.21815 5 4.21815C5.13682 4.21815 5.2723 4.1912 5.39869 4.13883C5.52509 4.08647 5.63994 4.00972 5.73667 3.91296L8.93125 0.720459C9.04913 0.60661 9.20701 0.543614 9.37088 0.545038C9.53475 0.546462 9.69151 0.612192 9.80739 0.728072C9.92327 0.843952 9.989 1.00071 9.99042 1.16458C9.99185 1.32846 9.92885 1.48633 9.815 1.60421L6.62292 4.79671C6.19281 5.22597 5.60996 5.46706 5.00229 5.46706C4.39462 5.46706 3.81178 5.22597 3.38167 4.79671L0.185002 1.60004C0.0976619 1.51276 0.0381326 1.40156 0.0139274 1.28048C-0.0102787 1.1594 0.00192259 1.03386 0.0489931 0.919704C0.0960626 0.80555 0.175892 0.707896 0.278406 0.639066C0.38092 0.570236 0.501526 0.533314 0.625003 0.532959Z" fill="#51555F"/>
    </svg>
  );
  
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
            IconComponent={NewIcon}
            className='customer-select'
            MenuProps={MenuProps}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Azər Azərov</MenuItem>
              <MenuItem value={4}>Qocayev Eldar</MenuItem>
              <MenuItem value={2}>Qocayev Eldar</MenuItem>
              <MenuItem value={9}>Qocayev Eldar</MenuItem>
              <MenuItem value={9876}>Qocayev Eldar</MenuItem>
              <MenuItem value={7}>Qocayev Eldar</MenuItem>
              <MenuItem value={0}>Qocayev Eldar</MenuItem>
              <MenuItem value={9876}>Qocayev Eldar</MenuItem>
              <MenuItem value={2345}>Qocayev Eldar</MenuItem>
            </Select>
            <Icon name="search" size={15} className="testt"/>
          </FormControl>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

