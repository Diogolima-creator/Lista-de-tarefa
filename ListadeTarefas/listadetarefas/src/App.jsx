import { useState } from "react";
import * as C from './App.styles'
import ListItem from './components/ListItem'
import AddArea from "./components/AddArea";

export default props => {
    const [list, setList] = useState([
        { id:1, name: 'Comprar o pão na padaria', done: false },
        { id:2, name: 'Comprar o bolo na padaria', done: false }
    ]);

    const handleAddTask = (taskName) => {
        let newList = [...list];
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        });
        setList(newList);
    }

    return(
        <C.Container>
            <C.Area>
              <C.Header>Lista de Tarefas</C.Header>
                
                <AddArea onEnter= {handleAddTask}/>

                {list.map((item, index)=>(
                    <ListItem key={index} item={item} />
                ))}
                 
            </C.Area>
        </C.Container>
    );
}