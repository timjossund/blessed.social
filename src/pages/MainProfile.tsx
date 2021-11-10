import React, { useState, useEffect } from 'react'
import { RightColumn } from '../components/RightColumn'
import { ProfileLeftColumn } from '../components/ProfileLeftColumn'
import { ArrowUpSquare } from 'react-bootstrap-icons'


export const MainProfile: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 600) {
            setIsVisible(true)
            } else {
            setIsVisible(false)
            }
        }

    return (
        <div 
            className="w-100 bg-light ps-5" 
            style={{paddingTop: '100px' }}>
            <div >
                <div className="row mt-4">
                    <div className="col-lg-8 bg-white shadow-sm rounded">
                        <ProfileLeftColumn />
                        <div>
                            {isVisible && 
                            <div>
                                <ArrowUpSquare 
                                    onClick={scrollToTop} 
                                    style={{position: 'fixed', bottom: '20', left: '50', fontSize: '35'}}
                                />
                            </div>
                            }
                        </div>
                        
                    </div>
                    <div className="col-lg-3 bg-white shadow-sm rounded h-auto position-fixed top-1 end-0">
                        <RightColumn />
                    </div>
                </div>
            </div>
        </div>
    )
}
