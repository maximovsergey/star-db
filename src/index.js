const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
    }
    return await res.json();
}
getResource('https://swapi.co/api/people/11656/').then((body) => {
    console.log('////////// body ', body);
}).catch((err) => {
    console.error('Could not fetch ', err);
})
// await - будем ждать пока результат промиса не будет доступен