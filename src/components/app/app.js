import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />
            <ItemList />
            <PersonDetails />
        </div>
    )
}
export default App;