/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';


export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        isLoading: this.props.isLoading,
    }

    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
            this.setState({ isLoading: false });
        }
    }

    updatePerson() {
        const { personId, isLoading } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person, isLoading: isLoading });
            })
    }

    render() {
        const { person, isLoading } = this.state;
        return (
            <div className="person-details">
                {person !== null
                    ? isLoading
                        ? <><div className="details-image">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${this.state.person.id}.jpg`}
                                className="details-image"
                            />
                        </div>
                            <div className="details-body">
                                <div className="name">{this.state.person.name}</div>
                                <div>id: {this.state.person.id}</div>
                                <div>gender: {this.state.person.gender}</div>
                                <div>birthYear: {this.state.person.birthYear}</div>
                                <div>eyeColor: {this.state.person.eyeColor}</div>
                            </div>
                        </>
                        : <Spinner />
                    : <div>Выберите персону их листа</div>
                }
            </div>
        )
    }
}