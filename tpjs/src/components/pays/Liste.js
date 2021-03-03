import React,{useState} from 'react';
function List() {
    let listePays = ['france','espagne','belgique'];
    const [pays, setPays] = useState(listePays);
    
    return (
        <ul>
            <li>{pays[0]}</li>
            <li>{pays[1]}</li>
            <li>{pays[2]}</li>
        </ul>
    )
}
export default List;