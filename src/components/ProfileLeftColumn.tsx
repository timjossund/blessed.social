import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, 
    Input, Card, CardImg, CardBody, CardText } from 'reactstrap'
import { HandThumbsUp, Heart, EmojiFrown, EmojiLaughing } from 'react-bootstrap-icons';
import User from '../assets/user.jpeg'
import ProfileBanner from '../assets/e6cf082d-ce2e-4c0f-8187-f2521c6d143b-frame-park-2.jpg'

export const ProfileLeftColumn: React.FC = () => {
    const [state, setState] = useState({
            isOpen: false
        })

    const handleModalToggle = () => {
        setState({ isOpen: !state.isOpen })
    } 

    const onImageChange = () => {
        <div></div>
    }

    return (
        <div className='px-3'>
            <div 
                className='row d-flex' 
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <div className='py-3 col-lg-12'>
                    <img 
                        src={ProfileBanner} 
                        className="rounded" 
                        alt='user' 
                        style={{height: '300px', width: '100%'}}
                    />
                </div>
            </div>
            <div 
                className='row mb-3 d-flex' 
                style={{justifyContent: 'space-between', borderWidth: '0px 0px 1px 0px', borderStyle: 'solid', borderColor: '#dcdcdc'}}> 
                <div 
                    className='col d-flex ms-4 mb-3'  
                    style={{justifyContent: 'flex-start', alignItems: 'flex-start', zIndex: 2, marginTop: '-75px'}}>
                    <img 
                        src={User} 
                        className="rounded-circle shadow-sm" alt='user' 
                        style={{width: '150px', borderWidth: '3px', borderStyle: 'solid', borderColor: 'white'}}
                    />
                </div>
                <div 
                    className='col w-75 d-flex' 
                    style={{justifyContent: 'flex-end', alignContent: 'center'}}>
                    <Button 
                        onClick={handleModalToggle} type="button" 
                        className="btn-lg mb-5" color='primary' 
                        data-bs-toggle="modal">
                        Add Post
                    </Button>
                </div>
            </div>
            <div className='row pb-3'>
                <div className='col-lg-4 px-4 text-center'>
                <h4 className='mb-3 w-75'>
                    Tim Jossund
                </h4>
                    <ul className="list-group list-group-flush w-75">
                        <li className="list-group-item">
                            <Link 
                                to="/" 
                                className="text-decoration-none text-dark">
                                Home
                            </Link>   
                        </li>
                        <li className="list-group-item">
                            My Images
                        </li>
                        <li className="list-group-item">
                            My Friends
                        </li>
                    </ul>
                </div>
                <div className='col'> 
                    <div>
                        <h4 className='mb-3'>
                            My Posts:
                        </h4>
                        <Card className="card border-0 shadow-sm my-3 py-2" >
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <div 
                                    className='d-flex mb-2' 
                                    style={{
                                        justifyContent: 'space-between', borderWidth:'0px',
                                        borderColor:'#D3D3D3', borderBottomWidth:'1px', borderStyle:'solid'}}>
                                    <div className='mb-1'>
                                    <HandThumbsUp 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <Heart 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}}
                                        />
                                        <EmojiFrown 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <EmojiLaughing 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                    </div>
                                    <div 
                                        className='mb-1'
                                        style={{cursor: 'pointer'}}>
                                        Add Comment
                                    </div>
                                </div>
                                <div 
                                    className='d-flex' 
                                    style={{justifyContent: 'space-between'}}>
                                    <div className=''>
                                        <p style={{fontSize:'12px'}}>Reactions: 1k</p>
                                    </div>
                                    <div className=''>
                                        <p style={{
                                            fontSize:'12px', 
                                            cursor: 'pointer'
                                        }}>
                                            View Comments: 10
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card border-0 shadow-sm my-3 py-2" >
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <div 
                                    className='d-flex mb-2' 
                                    style={{
                                        justifyContent: 'space-between', borderWidth:'0px',
                                        borderColor:'#D3D3D3', borderBottomWidth:'1px', borderStyle:'solid'}}>
                                    <div className='mb-1'>
                                    <HandThumbsUp 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <Heart 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}}
                                        />
                                        <EmojiFrown 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <EmojiLaughing 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                    </div>
                                    <div 
                                        className='mb-1'
                                        style={{cursor: 'pointer'}}>
                                        Add Comment
                                    </div>
                                </div>
                                <div 
                                    className='d-flex' 
                                    style={{justifyContent: 'space-between'}}>
                                    <div className=''>
                                        <p style={{fontSize:'12px'}}>Reactions: 1k</p>
                                    </div>
                                    <div className=''>
                                        <p style={{
                                            fontSize:'12px', 
                                            cursor: 'pointer'
                                        }}>
                                            View Comments: 10
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card border-0 shadow-sm my-3 py-2" >
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/256/186"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <div 
                                    className='d-flex mb-2' 
                                    style={{
                                        justifyContent: 'space-between', borderWidth:'0px',
                                        borderColor:'#D3D3D3', borderBottomWidth:'1px', borderStyle:'solid'}}>
                                    <div className='mb-1'>
                                    <HandThumbsUp 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <Heart 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}}
                                        />
                                        <EmojiFrown 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                        <EmojiLaughing 
                                            className='mx-1 h4'
                                            style={{cursor: 'pointer'}} 
                                        />
                                    </div>
                                    <div 
                                        className='mb-1'
                                        style={{cursor: 'pointer'}}>
                                        Add Comment
                                    </div>
                                </div>
                                <div 
                                    className='d-flex' 
                                    style={{justifyContent: 'space-between'}}>
                                    <div className=''>
                                        <p style={{fontSize:'12px'}}>Reactions: 1k</p>
                                    </div>
                                    <div className=''>
                                        <p style={{
                                            fontSize:'12px', 
                                            cursor: 'pointer'
                                        }}>
                                            View Comments: 10
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Modal 
                            isOpen={state.isOpen} 
                            toggle={handleModalToggle} 
                            className="postModal p-3">
                            <ModalHeader
                                className="bg-primary"
                                style={{color: 'white'}}
                                toggle={handleModalToggle}
                                charCode="Y">
                                Add Post:
                            </ModalHeader>
                            <ModalBody>
                            <div className='mb-3'>
                                <Input 
                                    type='textarea' 
                                    placeholder='Enter your post here...'
                                />
                            </div>
                            <p>Add a photo</p>
                            <input 
                                type="file" 
                                name="myImage" 
                                onChange={onImageChange} />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onClick={function noRefCheck(){}}>
                                    Post Now
                                </Button>
                                {' '}
                                <Button onClick={handleModalToggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}
