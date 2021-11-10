import React from 'react'
import { RightColumn } from '../components/RightColumn'
import { MainFeedBody } from '../components/MainFeedBody'
import { LeftColumn } from '../components/LeftColumn'

export const MainHome: React.FC = () => {
    return (
        <div 
            className="w-100 h-100 bg-light" 
            style={{paddingTop: '100px' }}>
            <div className="">
                <div className="row mt-4">
                    <div className="col-lg-3 bg-white shadow-sm rounded h-auto position-fixed">
                        <LeftColumn />
                    </div>
                    <div className="col-lg-5 bg-white shadow-sm rounded m-auto">
                        <MainFeedBody />
                    </div>
                    <div className="col-lg-3 bg-white shadow-sm rounded h-auto position-fixed top-1 end-0">
                        <RightColumn />
                    </div>
                </div>
            </div>
        </div>
    )
}
