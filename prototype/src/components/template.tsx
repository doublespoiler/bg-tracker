import * as React from "react";

//You have to define your data types beforehand with interfaces
interface Users {
  name: string,
  password: string
}

interface ExampleProps {
    data1: string,
    data2: Array<string>,
    data3: Array<Users>
}

//and then make sure you call the types
export const Example:React.FC<ExampleProps> = props => {

    const myVar:number = 5;
    return (
        
    )
}