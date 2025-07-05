import { setPokemons, loading } from "./pokemonSlice";
import { pokemonApi } from '../../../services/pokemonApi';

// NOTE - Las consultas echas aquí modifican el "state" mediante los actions(dispatch) que se importan desde el Slice

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(loading());

    // SECTION - Fetch

    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${page * 10}`)
    // const data = await resp.json()


    // SECTION - Axios

    const { data } = await pokemonApi.get(`/pokemon/?limit=10&offset=${page * 10}`);


    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};