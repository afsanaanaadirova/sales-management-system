import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector, useDispatch } from "react-redux";
import { selecetAllInvoices,fetchinvoices} from "../../../features/invoice/invoiceSlice";
import { useEffect,useState } from "react";
import ThreeDotsMenu from "./threedots"
import "./table-component.css"
import "./add-modal-table.css"
import Icon from '../../../assets/images/icons/icon';


const columns = [
  { id: 'name', label: 'Məhsul adı', minWidth: 170 },
  {
    id: 'productNumber',
    label: 'Miqdar',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'price', label: 'Qiymət', minWidth: 170 },
  {
    id: 'totalAmount',
    label: 'Toplam məbləğ',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];


const StickyHeadTable = () => {


  const dispatch = useDispatch();

  const invoices = useSelector(selecetAllInvoices);

 

  useEffect(() => {
      dispatch(fetchinvoices())
  }, [dispatch])

  const[edit,setEdit]= useState(false)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] =useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className="add-modal">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  <Icon name="arrow-down" size={6}/>
                </TableCell>
              ))}
              <TableCell>Əmrlər</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {invoices
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                      <TableCell>
                        <ThreeDotsMenu row={row}/>
                        </TableCell>
                  </TableRow>
                );
              })} 
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={invoices.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default StickyHeadTable;