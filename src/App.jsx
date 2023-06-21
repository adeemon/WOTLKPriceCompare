import './App.css';
import { useEffect, useState } from 'react';
import { AHengine } from './modules/auctionsHandler/engine'
import { ItemNotesListContainer } from './containers/ItemNotesListContainer'
import { ahID } from './config'
export function App() {
    const [itemsData, setItemsData] = useState([]);
    useEffect(()=> {
        async function getData() {
            let engine = new AHengine(ahID);
            const auctionsData = await engine.init();
            setItemsData(auctionsData);
        }
        getData();
    },[]);

    if(itemsData.length > 0) {
        return ( 
            <div className = "App">
            <ItemNotesListContainer itemsData={itemsData} />
            </div>
        );
    }
    else return (
        <div className = "App">
        <p> Loading! </p>
        </div>
    )
}
