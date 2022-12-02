import * as React from "react";

interface SmallCardProps {
    theClass?: string
}

export const SmallCard:React.FC<SmallCardProps> = props => {


    return (
        <div className={`smallcard ${props.theClass}`}>
            {props.children}
        </div>
        
    )
}