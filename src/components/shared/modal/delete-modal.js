import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ButtonComponent from '../button/button';
import ButtonComponentCancel from '../button/cancel-button';
import "./delete-modal.css"
import Icon from '../../../assets/images/icons/icon';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../features/invoice/invoiceSlice'

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

export default function DeleteModal({showDeleteModal,closeModal,deleteRowId}) {
  const dispatch = useDispatch();


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showDeleteModal}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showDeleteModal}>
          <Box sx={style}>
           <Icon name="close" size={15} onClick={closeModal}/>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Qaiməni silməyinizə əminsiniz?
            </Typography>
            <Typography id="transition-modal-buttons">
              <ButtonComponentCancel onClick={closeModal}>İmtina</ButtonComponentCancel>
              <ButtonComponent   onClick={() => {
              dispatch(removeItem(deleteRowId));
              closeModal();
          }}>Sil</ButtonComponent>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

