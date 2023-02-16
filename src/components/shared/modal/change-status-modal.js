import * as React from 'react';
import ButtonComponent from '../button/button';
import ButtonComponentCancel from '../button/cancel-button';
import "./change-status-modal.css"
import {changeItemStatus } from '../../../features/invoice/invoiceSlice'
import { useDispatch,useSelector } from 'react-redux';


export default function ChangeStatusModal({showStatusModal,closeModal,deleteRowId, id, text, status }) {
  const dispatch = useDispatch()

  const handleStatusChange = () => {
    const newStatus = status === 'təstiqlənib' ? 'completed' : 'wait'
    dispatch(changeItemStatus({ id, status: newStatus }))
  }
  return (
    <div className='status-modal'>
      <div
        open={showStatusModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          
          <ul className='status'>
            <li className='status-confirm'><a href="">təstiqlənib</a></li>
            <li className='status-wait'><a href="">gözləyir</a></li>
            <li className='status-terminated active-status'><a href="">xitam olunub</a></li>
          </ul>
          <div className='buttons'>
            <ButtonComponentCancel onClick={closeModal}>İmtina</ButtonComponentCancel>
            <ButtonComponent onClick={()=>console.log(handleStatusChange)}>Təstiqlə</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
