
import "./style.css"

export default function Banner(props){
    return(
        <div className="banner"> 
        <img src={props.img} alt="" />
          <div>
              <h2>{props.title}</h2>
              <p>{props.description}</p>
          </div>
        </div>
    )
      
  }
  