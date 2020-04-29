import React from 'react';

const CardCustom = (props) => {
    return(
        <div className={props.col}>
            <div className="card">
                {props.children}
            </div>
        </div>
    )
}

export default CardCustom;