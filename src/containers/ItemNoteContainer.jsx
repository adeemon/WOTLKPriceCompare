import { useEffect } from 'react';
import { ItemNote } from '../components/ItemNote.jsx'

export function ItemNoteContainer (props) {
    const filteredData = Object.entries(props.itemNote).filter(element => element[0]!='Item name');
    useEffect(()=>{
        console.log(props);
    })

    return (
        <ItemNote name={props.itemNote['Item name']} prices={filteredData} />
    )
};