import React, { userState } from 'react';
import ITEMS from '../data/items';



export default function SearchableList(){
    const [query, setQuery] = React.useState('');
    const filteredItems = ITEMS.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}