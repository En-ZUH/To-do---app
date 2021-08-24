import React from 'react';
import { useState } from 'react';

export const ListContext = React.createContext();

export default function List(props) {
    const [list, setList] = useState([


        { _id: 1, complete: false, text: 'Do your assignments', difficulty: 3, assignee: 'Person A' },
        { _id: 2, complete: false, text: 'check your email', difficulty: 2, assignee: 'Person A' },
        { _id: 3, complete: false, text: 'Read something for pleasure.', difficulty: 4, assignee: 'Person B' },
        { _id: 4, complete: false, text: 'Plot out your next day ', difficulty: 3, assignee: 'Person C' },
        { _id: 5, complete: false, text: 'Take time for gratitude', difficulty: 1, assignee: 'Person B' },

    ]);

    function addItem(item) {

        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
    }

    function toggleComplete(id) {

        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            item.complete = !item.complete;
            let modified = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList(modified);
        }
    };

    return (

        <ListContext.Provider value={{ list, addItem, toggleComplete }}>
            {props.children}
        </ListContext.Provider>

    );
}
