import React from 'react'
import './Welcome.css'

const Welcome = ({ setCategory }) => {
    return (
        <div className='welcome-container'>
            <h2>Welcome! Please select your field of interest:</h2>
            <div className='category-btn'>
                <button onClick={()=>setCategory("cricket")}>Cricket🏏</button>
                <button onClick={()=>setCategory("cinema")}>Cinema🎥</button>
                <button onClick={()=>setCategory("dsa")}>DSA💻</button>
                <button onClick={()=>setCategory("travel")}>Wander🌴</button>
            </div>
        </div>
    )
}

export default Welcome
