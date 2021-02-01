const state = {
    cities: [
        {
            id: 1,
            name: 'Lyon',
            lon: '4.5833',
            lat: '45.75',
        },
        {
            id: 2,
            name: 'Paris',
            lon: '2.3488',
            lat: '48.8534',
        }
    ]
};

const getters = {
    allCities: (state) => state.cities,
    firstCity:  (state) => state.cities[0],
};

const actions = {};

const mutations = {};

export default{
    state: state,
    getters,
    actions,
    mutations,
};