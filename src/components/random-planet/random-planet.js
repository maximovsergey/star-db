import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends React.Component {
    swapi = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false,
    };

    constructor() {
        super();
        this.updatePlanet();
    }
    // function
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    }
    onError = (error) => {
        this.setState({ error: true, loading: false });
    }

    updatePlanet() {
        const id = 12;
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        this.updatePlanet();
        const { planet, loading, error } = this.state;
        console.log('//////////', this.state.planet);
        return (
            <div className="card">
                {loading && !error ? <Spinner />
                    : !error ? <PlanetView planet={planet} />
                        : <div>Нет данных</div>
                }
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {
    const { id, planetName, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <div>
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
        </React.Fragment>
    )
}
