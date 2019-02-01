export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person)
    }
    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)
    }
    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarShip);
    }
    async getStarships(id) {
        const starShip = await this.getResource(`/starships/${id}/`);
        return this._transformStarShip(starShip)
    }

    _extractId(item) {
        const regExp = /\/([0-9]*)\/$/;
        const id = item.url.match(regExp)[1];
        return id;
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }
    _transformStarShip(starShip) {
        return {
            id: this._extractId(starShip),
            name: starShip.name,
            model: starShip.model,
            manufacturer: starShip.manufacturer,
            costIdCredits: starShip.costIdCredits,
            length: starShip.length,
            crew: starShip.crew,
            passengers: starShip.passengers,
            cargoCapacity: starShip.cargoCapacity,
        }
    }
    _transformPerson(person) {
        return {
            id: this._extractId(person),
            planetName: person.name,
            gender: person.gender,
            birthYear: person.rotation_period,
            eyeColor: person.eyeColor,
        }
    }
}