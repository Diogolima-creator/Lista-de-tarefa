import * as C from './style'
import { useState } from 'react'
   
export default props =>{
    const [isChecked, setIsChecked] = useState(props.item.done);

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange = {e => setIsChecked(e.target.checked)}
            />
           <label>{props.item.name}</label>
        </C.Container>
    );
}