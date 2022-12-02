import * as React from "react";
import * as ReactDOM from "react-dom";
import { BigCard } from "./components/bigcard";
import { SmallCard } from "./components/smallcard";
import { Navi } from "./components/navi";
import { Row } from "./components/row";



//React.FC (react function component type)
const App:React.FC = () => {

  const menu:Array<{label: string; url: string;}> = [
    {
      label: "home",
      url: "/"
    },
    {
      label: "about",
      url: "/about"
    },
    {
      label: "projects",
      url: "projects"
    }
  ]
  

    return (
      <main>
        <Navi menu={menu} />
        <Row><h1>Hello World</h1>
        <BigCard />
        <SmallCard /></Row>
      </main>
        
    )

}

ReactDOM.render(<App/>, document.getElementById('app'))