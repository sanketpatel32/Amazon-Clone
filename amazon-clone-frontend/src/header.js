import React from 'react';
import logo from '../src/assets/logo.png';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <div className='header'>
            <img className="header_logo" src={logo} alt="Logo" />
            <div className="header_search"> <input className="header_searchInput" type='text' />
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className="header_option">
                    <div className='header_optionLineOne'>Hello Guest</div>
                    <div className='header_optionLineTwo'>Sign In</div>
                </div>
                <div className="header_option">
                    
                    <div className='header_optionLineOne'> Return</div>
                    <div className='header_optionLineTwo'>&Order</div>
                </div>
                <div className="header_option">
                    <div className='header_optionLineOne'>Your</div>
                    <div className='header_optionLineTwo'>Prime</div>
                </div>
                <div className='header_optionBasket'>
                    <ShoppingCartIcon />
                    <span className='header_optionLineTwo header_basketCount'> 0</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
