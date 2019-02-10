import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';


export default class App extends React.Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    }

    render() {
        return (
            <div >
                <Header />
                <RandomPlanet />
                <div className="person-person-details">
                    <ItemList onItemSelected={this.onPersonSelected}
                    />
                    <PersonDetails
                        personId={this.state.selectedPerson}
                    />
                </div>
            </div>
        )
    }
}
