import { useEffect } from "react"

export function ItemNotesList(props) {
    useEffect(()=>{
        console.log('List props');
        console.log(props.arrayToRender);
    })

    return (
        <div>
            <ul>
                <li>{props.arrayToRender}</li>
            </ul>
        </div>
    )
}