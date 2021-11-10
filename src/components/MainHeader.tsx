import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/blessedfull.svg';
import { Button, Input } from 'reactstrap';
import { Search } from 'react-bootstrap-icons'; 

export const MainHeader: React.FC = () => {

    return (
        <div 
            className="shadow-sm bg-white fixed-top w-100 top-0" 
            style={{zIndex: 10}}>
            <div 
                className="row d-flex py-2 px-3" 
                style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <div className='col'>
                    <Link to="/">
                        <img 
                            src={Logo} 
                            alt='blessings-logo' 
                            className='col-6'
                            style={{width: '280px'}}
                        />
                    </Link>
                </div>
                <div 
                    className='col' 
                    style={{width: '250px'}}>
                    <div 
                        className='d-flex flex-direction-row w-100' 
                        style={{justifyContent: 'flex-between', alignItems: 'center'}}>
                        <Search style={{marginRight: '10px'}}/>
                        <Input 
                            className="searchBar w-100 border-0 bg-light p-2 ml-2 rounded" placeholder='Search here ...' 
                        />
                    </div>
                </div>
                <div 
                    className='col' 
                    style={{textAlign: 'right'}}>
                    <Button 
                        className='btn' 
                        color='primary'>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}
