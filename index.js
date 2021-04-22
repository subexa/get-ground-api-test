const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/1/')
.then(res => res.json())
.then(res => console.log(res))