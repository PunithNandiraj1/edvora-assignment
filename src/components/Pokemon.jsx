import React from 'react'
import './Pokemon.css'

const Pokemon = ({id, image, name, type, _callback }) => {
    const style = type + " thumbnail-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default Pokemon