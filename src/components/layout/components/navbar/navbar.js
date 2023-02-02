import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MainLogo from "../../../../assets/images/common/PASHA LIFE Logo-2.svg";
import ProfilPhoto from "../../../../assets/images/common/profil-photo.png";
import Icon from '../../../../assets/images/icons/icon';
import './navbar.css'


const Navbar = () => {
const [option, setoption] = useState('')

  const handleChange = (event) => {
    setoption(event.target.value);
  };
  
  const NewIcon = (props) => (
  <svg {...props} width="14" height="8" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.625003 0.532959C0.790707 0.533104 0.949572 0.599048 1.06667 0.716292L4.26334 3.91296C4.36007 4.00972 4.47491 4.08647 4.60131 4.13883C4.72771 4.1912 4.86319 4.21815 5 4.21815C5.13682 4.21815 5.2723 4.1912 5.39869 4.13883C5.52509 4.08647 5.63994 4.00972 5.73667 3.91296L8.93125 0.720459C9.04913 0.60661 9.20701 0.543614 9.37088 0.545038C9.53475 0.546462 9.69151 0.612192 9.80739 0.728072C9.92327 0.843952 9.989 1.00071 9.99042 1.16458C9.99185 1.32846 9.92885 1.48633 9.815 1.60421L6.62292 4.79671C6.19281 5.22597 5.60996 5.46706 5.00229 5.46706C4.39462 5.46706 3.81178 5.22597 3.38167 4.79671L0.185002 1.60004C0.0976619 1.51276 0.0381326 1.40156 0.0139274 1.28048C-0.0102787 1.1594 0.00192259 1.03386 0.0489931 0.919704C0.0960626 0.80555 0.175892 0.707896 0.278406 0.639066C0.38092 0.570236 0.501526 0.533314 0.625003 0.532959Z" fill="#51555F"/>
    </svg>
  );
  

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={MainLogo}/>
      </div>
      <div className='navbar-select'>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={option}
          onChange={handleChange}
          displayEmpty
          IconComponent={NewIcon}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">Pasha Həyat Sığorta</MenuItem>
          <MenuItem value={20}>çıxış</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className='navbar-notification'>
          <Icon name="notification" color="#5F646E" size={25}/>
      </div>
      <div className='navbar-profil'>
        <img src={ProfilPhoto}/>
      </div>
    </div>
  )
}

export default Navbar
