import React from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemList extends React.Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({ peopleList });
            })
    }


    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        })
    }

    render() {
        const { peopleList } = this.state;
        return (
            <div className="card">
                {!peopleList ? <Spinner />
                    : this.renderItems(peopleList)}
            </div>
        );
    }
}