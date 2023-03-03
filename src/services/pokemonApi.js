import axios from 'axios';

// NOTE - Aqui podemos crear todas las peticiones (GET, POST, PUT, DELETE) que se necesiten con axios

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});