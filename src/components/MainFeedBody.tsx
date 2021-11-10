import React from 'react'
import { ArrowClockwise, HandThumbsUp, Heart, EmojiFrown, EmojiLaughing } from 'react-bootstrap-icons';
import { Button, Card, CardImg, CardBody, CardText } from 'reactstrap'
 
export const MainFeedBody: React.FC = () => {

    const refreshFeed = () => {
        window.location.reload();
    }

    return (
        <div className="w-100 p-3 m-auto">
            <div 
                className='d-flex flex-row' 
                style={{justifyContent: 'space-between'}}>
                <h3>Recent Posts:</h3>
                <Button 
                    onClick={refreshFeed}
                    color='primary'>
                    <ArrowClockwise />
                </Button>
            </div>
            <Card className="card border-0 shadow-sm my-3" >
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
                        <div style={{cursor: 'pointer'}}>
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
                        <div style={{cursor: 'pointer'}}>
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
        
    )
}
