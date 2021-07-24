import React from 'react'

const ProgresBarPage = () => {
    return (
        <div>
            <h2>Progres Bar</h2>
            
            <div className="container-sm">
                <div className="progressbar">
                    <div style={{width: '12%'}}></div>
                </div>

                <div className="progess">
                    <div className='progress-bar bg-black' style={{width: '12%'}}></div>
                </div>

                <div>
                    <progress className='' max='100' value='50'></progress>
                </div>
            </div>
        </div>
    )
}

export default ProgresBarPage
