import { ItemNoteContainer } from '../containers/ItemNoteContainer'
import { ItemNotesList } from '../components/ItemNotesList.jsx'
import { useEffect, useState } from 'react'

export function ItemNotesListContainer(props){
    const mapOfItemNotes = Object.values(props.itemsData);
    const [itemNotesArray, setItemNotesArray] = useState([]);
    let arrayToRender = itemNotesArray.map((element) => {
        return (
        <ItemNoteContainer itemNote={element} />
        );
    });
    useEffect(()=>{
        if (itemNotesArray.length > 0) return;
        let output = [];
        mapOfItemNotes.forEach((element) => {
            let itemData = {};
            element.forEach((value, key) => {
                itemData[key] = value;
            })           
            output = [...output, itemData];
        })
        setItemNotesArray(output);
    }, [])

    if (arrayToRender.length > 0) {
        return (
            <ItemNotesList arrayToRender={arrayToRender} />
        )
    } else {
        return (
            <div>Loading ^^</div>
        )
    }
}