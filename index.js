let store = {
    name: 'Imaginary shop',
    address: {
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Stepana Bandery',
        houseNumber: '30',
    }
}

store.clients = {};

store.clients['Oleksii Davydov'] = {
  quantity: 1,
  bonuses: 100,
};
store.clients['Viacheslav Koniev'] = {
  quantity: 2,
  bonuses: 200,
};
store.clients['Yuriy Duchev'] = {
  quantity: 3,
  bonuses: 300,
};
store.clients['Viktoriia Barankova'] = {
  quantity: 4,
  bonuses: 400,
};
store.clients['Viktoriia Chernyshova'] = {
  quantity: 5,
  bonuses: 500,
};

console.log (store);