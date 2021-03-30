const getDataFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((data) => {
            return data.results.map((characters) => {
                return {
                    id: characters.id,
                    name: characters.name,
                    gender: characters.gender,
                    species: characters.species,
                    image: characters.image,
                    planet: characters.origin.name,
                    status: characters.status,
                    episodes: characters.episode.length,
                };
            });
        });
};

export default getDataFromApi;