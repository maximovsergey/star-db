import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends React.Component {
    swapi = new SwapiService();
    state = {
        planet: {},
    };

    constructor() {
        super();
        this.updatePlanet();
    }
    // function
    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    }

    updatePlanet() {
        const id = 12;
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        this.updatePlanet();
        const { planet: { id, planetName, population, rotationPeriod, diameter } } = this.state;
        return (
            <div className="card">
                <div className="image">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="image"
                    />

                </div>
                <div className="planetData">
                    <div className="planetName">
                        {planetName}
                    </div>
                    <div>
                        Население: {population}
                    </div>
                    <div>
                        Период врашения: {rotationPeriod}
                    </div>
                    <div>
                        Диаметр: {diameter}
                    </div>
                </div>
            </div>
        )
    }
}
