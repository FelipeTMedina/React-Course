
import '../../style.css'

export default  function Contactmain() {
    return(
            <form action="">
            <div className='algin-main'>
                
                <div className='align-name'>
                    <label htmlFor="Nome">Nome</label>
                    
                        <input type="text" />
                    
                </div>

                <div className='align-name'>
                    <label htmlFor="Nome">E-MAIL</label>
                    
                        <input type="text" />
                    
                </div>

                <div className='align-name1'>
                    <label htmlFor="Nome">Message</label>
                   
                        <textarea name="" id=""></textarea>
                  
                </div>

                
                    <div className='align-button'>
                        
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I accept the Terms</label>

                    </div>

            </div>
            </form>
    )

}