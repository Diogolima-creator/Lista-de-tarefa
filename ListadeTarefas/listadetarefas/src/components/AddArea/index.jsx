import * as C from './styles'
import { useState } from 'react'
   
export default props =>{
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (KeyboardEvent) => {
        if(KeyboardEvent.code === 'Enter' && inputText !== ''){
            props.onEnter(inputText);
            setInputText('');
        }
    }
    return(
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp = {handleKeyUp}
            />
        </C.Container>
    );
}