
import '../style.css'

import Image from "../img/Image.svg"
import LinkedIn from "../img/LinkedIn.svg"
import X from "../img/X.svg"
import Dribble from "../img/Dribble.svg"

export default function Section() {
    return(
        <div className='pai-section'>
            <img src={Image} alt="" />
            <div className='filho-section'>
                <h3>Full name</h3>
                <p>Job title</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className='social-section'>
                <a href=""><img src={LinkedIn} alt="" />
                </a>
                <img src={X} alt="" />
                <img src={Dribble} alt="" />
            </div>
        </div> 

    )

}