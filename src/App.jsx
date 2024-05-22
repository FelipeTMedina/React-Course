import "../src/componente/teams/style.css"

import Content from "./componente/teams/components/content"
import Main from "./componente/teams/components/main"
import Section from "./componente/teams/components/section"



function App() {
  return (

  <body>
      <div className="align-all">
        <div className="align-contente">
          <Content/>
        </div>

        <div className="align-section">
          <Section/>
          <Section/>
          <Section/>
        </div>

        <div className="align-section2">
          <Section/>
          <Section/>
          <Section/>
        </div>
        
        <div>
        <Main/>
        </div>
      </div>
  </body>


  );
}

export default App;
