/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import PropTypes from 'prop-types';

export default class RandomPlanet extends React.Component {
    static defaultProps = {
        updateInterval: 5000,
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    swapi = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false,
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // function
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    }
    onError = (error) => {
        this.setState({ error: true, loading: false });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;
        return (
            <div style={{ marginTop: '20px' }}>
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
            <div className="random-planet">
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
