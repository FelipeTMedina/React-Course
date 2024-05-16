import "./App.css"

import Banner from "./componente/Banner"

import accelerate from "./assets/images/svg/accelerate-svgrepo-com.svg"
import computer from "./assets/images/svg/computer-svgrepo-com.svg"
import user from "./assets/images/svg/user-svgrepo-com.svg"
import cell from "./assets/images/svg/cell-phone-svgrepo-com.svg"
import conversation from "./assets/images/svg/conversation-svgrepo-com.svg"


function App() {
  return (

  <body>
    <div className="card">
      <h1>React Course</h1>
      <p> Front-End JavaScript </p>
    </div>


    <Banner title="titulo" description="descrição" img={accelerate}> </Banner>
    <Banner title="titulo" description="descrição" img={computer}> </Banner>
    <Banner title="titulo" description="descrição" img={user}> </Banner>
    <Banner title="titulo" description="descrição" img={cell}> </Banner>
    <Banner title="titulo" description="descrição" img={conversation}> </Banner>

  </body>


  );
}

export default App;
