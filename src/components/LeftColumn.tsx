import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'reactstrap'
import User from '../assets/user.jpeg'

export const LeftColumn: React.FC = () => {
    

    const [state, setState] = useState({isOpen: false});

    const handleModalToggle = () => {
        setState({ isOpen: !state.isOpen })
    } 

    const onImageChange = () => {<div></div>
        
    }

    return (
        <>
            <div className='w-100 py-3 px-3 flex-col text-center fixed'>
                <img 
                    src={User} 
                    className="w-50 h-50 rounded-circle mb-3" 
                    alt='user'/>
                <h4 className='mb-3'>
                    Tim Jossund
                </h4>
                <ul className="list-group list-group-flush text-left">
                    <li className="list-group-item">
                        <Link 
                            to="/profile"
                            className="text-decoration-none text-dark">
                            My Profile
                        </Link>
                    </li>
                    <li className="list-group-item">
                        My Images
                    </li>
                    <li className="list-group-item">
                        My Friends
                    </li>
                </ul>
                <Button 
                    onClick={handleModalToggle} 
                    type="button" 
                    className="mt-5 btn-lg" 
                    color='primary'
                    data-bs-toggle="modal">
                    Add Post
                </Button>
            </div>
            <div>
                <div>
                    <Modal 
                        isOpen={state.isOpen} 
                        toggle={handleModalToggle} 
                        className="postModal p-3 mt-5">
                        <ModalHeader
                            style={{color: 'white', backgroundColor: '#0275d8'}}
                            toggle={handleModalToggle}
                            charCode="Y">
                            Add Post:
                        </ModalHeader>
                        <ModalBody>
                            <div className='mb-3'>
                                <Input type='textarea' placeholder='Enter your post here...'/>
                            </div>
                            <p>Add a photo</p>
                            <Input 
                                type="file" 
                                name="myImage" 
                                onChange={onImageChange}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color='primary'
                                onClick={function noRefCheck(){}}>
                                Post Now
                            </Button>
                            {' '}
                            <Button 
                                onClick={handleModalToggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </>
    );

}
