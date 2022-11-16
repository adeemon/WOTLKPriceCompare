import { useEffect } from "react"

export function ItemNote(props) {
    useEffect(()=>{
        console.log(props)
    })
    const priceData = props.prices.map(element => 
        <li>
            <ul>
                <li>{element[0]}</li>
                <li>{element[1]}</li>
            </ul>
        </li>
    )

    return (
        <div>
            <ul className='item-note'>
                <li>{props.name}</li>
                {priceData}
            </ul>
        </div>
    )
}