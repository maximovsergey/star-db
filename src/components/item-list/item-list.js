import React from 'react';
import './item-list.css';

export default class ItemList extends React.Component {
    render() {
        return (
            <div className="card">
                <div>Luke</div>
                <div>Darth</div>
                <div>R2-D2</div>
            </div>
        );
    }
}