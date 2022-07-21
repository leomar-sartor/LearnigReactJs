import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

//  Componente de Apresentação - 1º Forma - StateFull / Manipula Estado
// export default class TodoList extends Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return (
//             <ul>

//             </ul>
//         );
//     }
// }

//  Componente de Apresentação - 2º Forma - StateLess / Não Manipula Estado
export const TodoList = (props) => {

    const { items } = props;
    
    return(
            <ul className="list-group">
                { items.map((item, index) => (
                    <TodoListItem key={index} index={index}  item={item} removeFromItems={props.removeFromItems} />
              ))}
            </ul>
    )
}