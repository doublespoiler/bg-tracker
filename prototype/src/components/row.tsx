import * as React from "react";

interface RowProps {
    theClass?: string
}

export const Row:React.FC<RowProps> = props => {


    return (
        <div className={`row ${props.theClass}`}>
            {props.children}
        </div>
        
    )
}