import React from "react";
import { TextField } from "@mui/material";
import ButtonComponent from "../button/button";
import ButtonSecondaryComponent from "../button/secondary-button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Icon from "../../../assets/images/icons/icon";
import { useSelector, useDispatch } from "react-redux";
import {selecetAllInvoices,fetchinvoices} from "../../../features/invoice/invoiceSlice";
import {selecetAllstatuses,fetchstatuses } from '../../../features/status/statusSlice'
import AddModal from "../modal/add-modal";
import "./invoices-filter.css";
import { useState,useEffect } from "react";

const InvoicesFilter = () => {
  const [productNumber, setProductNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const handleChangeProductNumber = (event) => {
    setProductNumber(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };  
  const handleChangeFilterStatus = (event) => {
    setFilterStatus(event.target.value);
  };
 
  const closeSatusModal = () => {
    setShowAddModal(false)
  };

  const dispatch = useDispatch();

  const invoices = useSelector(selecetAllInvoices);
  const statuses = useSelector(selecetAllstatuses);
  

  useEffect(() => {
      dispatch(fetchinvoices())
      dispatch(fetchstatuses())
  }, [dispatch])
  return (
    <>
      <div className="invoices-filters">
        <div className="invoices-filters--input">
          <TextField
            className="search-input"
            type="text"
            placeholder="Qaimə nömrəsi, müştəri adı üzrə axtar"
          />
          <Icon name="search" className="search-icon" size={15} />
        </div>
        <div className="invoices-filters--button">
          <ButtonSecondaryComponent>
            <Icon name="filter" size={15} />
            Filter
          </ButtonSecondaryComponent>
          <ButtonComponent onClick={()=>setShowAddModal(true)}>
            <Icon name="plus" size={15} />
            Yeni qaimə
          </ButtonComponent>
          <AddModal showAddModal={showAddModal} closeSatusModal={closeSatusModal} />
        </div>
      </div>
      <div className="invoices-filters--selects">
        <div className="product-number">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <label>Məhsul sayı</label>
            <Select
              value={productNumber}
              onChange={handleChangeProductNumber}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="product-number--select"
            >
              <MenuItem value="">
                <em>Seç</em>
              </MenuItem>
              {invoices.map((item)=>{
                 return <MenuItem value={10}>{item.productNumber}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
        <div className="amount-range">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <label>Məbləğ aralığı</label>
            <Select
              value={amount}
              onChange={handleChangeAmount}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>$ 50 - $ 1500</em>
              </MenuItem>
              <MenuItem value={10}>$ 50 - $ 1500</MenuItem>
              <MenuItem value={20}>$ 20 - $ 1200</MenuItem>
              <MenuItem value={30}>$ 80 - $ 2500</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter-status">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <label>Status</label>
            <Select
              value={filterStatus}
              onChange={handleChangeFilterStatus}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
              <em>Seç</em>
              </MenuItem>
              {statuses.map((item)=>{
                 return <MenuItem value={10}>{item.status}</MenuItem>
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default InvoicesFilter;
