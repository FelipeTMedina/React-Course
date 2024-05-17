import "./style.css";

import Seta from "../../assets/images/svg/seta.svg";
import Image from "../../assets/images/svg/Image.svg";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-description">
          <div className="layout-text">
            <h4>{props.tag}</h4>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div className="layout-button">
            <button className="button-box">Button</button>
            <button className="button-link">
              <p>Button</p>
              <img src={Seta} alt="" />
            </button>
          </div>
        </div>
        <img src={Image} alt="" />
      </div>
    </div>
  )
}