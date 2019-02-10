import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';


export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        isLoading: false,
    }

    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person, isLoading: true });
            })
    }

    render() {
        const { person, isLoading } = this.state;
        return (
            <div className="person-details">
                {person !== null
                    ? <><div className="details-image">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${this.state.person.id}.jpg`}
                            className="details-image"
                        />
                    </div>
                        <div className="details-body">
                            <div className="name">{this.state.person.name} {this.state.person.id}</div>
                            <div>id: {this.state.person.id}</div>
                            <div>gender: {this.state.person.gender}</div>
                            <div>birthYear: {this.state.person.birthYear}</div>
                            <div>eyeColor: {this.state.person.eyeColor}</div>
                        </div>
                    </>
                    : <div>Выберите персону их листа</div>
                }
            </div>
        )
    }
}