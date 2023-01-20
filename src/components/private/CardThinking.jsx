import React from 'react'

const CardThinking = () => {
    return (
        <div className='card mt-3'>
            <section className='card-header'>
                <p className='card-title'>what are you thinking?</p>
            </section>
            <section className='card-body'>
                <textarea className="textarea textarea-ghost"></textarea>
                <div className='card-header'>
                    <h2 className='card-subtitle'>Upload your photo</h2>
                </div>
                <div className='flex items-end' >
                    <button className='btn btn-primary btn-xs mt-3 mx-2 '>select file</button>
                    <p>No file selected.</p>
                </div>
                <button type="submit" className="btn btn-primary btn-xl mt-3">send</button>
                <button className="btn loading">loading</button>
            </section>
        </div>
    )
}

export default CardThinking;