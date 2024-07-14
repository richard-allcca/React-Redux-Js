import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './../store/slices/pokemon/pokemonThunks';

const Pokemon = () => {
  const { pokemons, loading, page } = useSelector(state => state.pokemons);

  // NOTE - el dispatch por ser una consulta de API se hace a un Thunks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);


  return (
    <>
      <hr />
      <h1>PokemonApp</h1>

      <span>Loading: { loading ? 'True' : 'False' }</span>

      <ul>
        {
          pokemons.map((el, i) => {
            return <li key={ i }>{ el.name }</li>;
          })
        }
      </ul>

      <button
        disabled={ loading }
        onClick={ () => dispatch(getPokemons(page)) }
      >
        Next
      </button>
    </>
  );
};

export default Pokemon;