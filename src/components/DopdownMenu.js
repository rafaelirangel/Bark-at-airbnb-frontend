import * as React from 'react';
import './DropdownMenu.css'
import { useState } from "react";
import LogIn from './LogIn/LogIn';
import LogOut from './LogOut/LogOut';
import Register from './Register/Register';

//Icons used on the page 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

//DropDown Menu with LogIn, LogOut and Register options
 const DropdownMenu = ({ handleLogIn })  => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [openLogOutModal, setOpenLogOutModal] = useState(false)
    const [openRegisterModal, setOpenRegisterModal] = useState(false)

    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

     const handleClose = () => {
         setAnchorEl(null);
     };

    return (
        <div>
            <div
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="burgermenu" >
                <MenuIcon />
                <Avatar />
            </div>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

            <div className='showLogin'>
                    <MenuItem onClick={() => { setOpenLoginModal(true) } } >LogIn</MenuItem>
                    {openLoginModal && <LogIn handleLogIn={handleLogIn}  closeLoginModal={setOpenLoginModal} />}
            </div>     

                <div className='showRegister'>
                    <MenuItem onClick={() => { setOpenRegisterModal(true) }} >Register</MenuItem>
                    {openRegisterModal && <Register closeRegisterModal={setOpenRegisterModal} />}
                </div>     
                
                <div className='showLogout'>
                    <MenuItem onClick={() => { setOpenLogOutModal(true) }} >LogOut</MenuItem>
                    {openLogOutModal && <LogOut closeLogOutModal={setOpenLogOutModal} />}
                </div> 
             
            </Menu>
        </div>
    );
}

export default DropdownMenu