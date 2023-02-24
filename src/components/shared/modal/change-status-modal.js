import * as React from 'react';
import ButtonComponent from '../button/button';
import ButtonComponentCancel from '../button/secondary-button';
import "./change-status-modal.css"
import {changeItemStatus } from '../../../features/invoice/invoiceSlice'
import {selecetAllstatuses,fetchstatuses } from '../../../features/status/statusSlice'
import { useDispatch,useSelector } from 'react-redux';


export default function ChangeStatusModal({showStatusModal,closeModal,deleteRowId, onClose }) {
  const [selectedStatus, setSelectedStatus] = React.useState('');
  const dispatch = useDispatch()


  React.useEffect(() => {
      dispatch(fetchstatuses())
  }, [dispatch])
 
  const statuses = useSelector(selecetAllstatuses);
  const uniqueStatuses = statuses.filter((item, index) => statuses.findIndex((status) => status.status === item.status) === index);

  const handleStatusChange = (newStatus) => {
    dispatch(changeItemStatus({ id: deleteRowId, status: newStatus }));
    closeModal();
    onClose();
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
            {
              uniqueStatuses.map((item)=>{
                 return <li key={item.id}
                  onClick={() => setSelectedStatus(item.status)}><a className={selectedStatus === item.status ? 'active' : ''} href="#/">{item.status}</a></li>
              })
            }
          </ul>
          <div className='buttons'>
            <ButtonComponentCancel onClick={closeModal}>İmtina</ButtonComponentCancel>
            <ButtonComponent onClick={() => handleStatusChange(selectedStatus)}>Təstiqlə</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
