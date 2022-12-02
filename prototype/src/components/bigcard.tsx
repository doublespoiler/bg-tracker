import * as React from "react";

interface BigCardProps {
    theClass?: string
}

export const BigCard:React.FC<BigCardProps> = props => {


    return (
        <div className={`card ${props.theClass}`}>
            {props.children}
        </div>
        
    )
}