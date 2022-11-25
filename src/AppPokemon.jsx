import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';



const AppPokemon = () => {

   const dispatch = useDispatch();

   const { pokemons, isLoading, page } = useSelector((state) => state.pokemons)
   // console.log(isLoading)

   useEffect(() => {
      dispatch(getPokemons())
   }, [])


   return (
      <>
         <h1>PokemonApp</h1>
         <hr />
         <span>Loading: { isLoading ? 'True' : 'False' }</span>

         <ul>
            {
               pokemons.map((el, i) => {
                  return <li key={ i }>{ el.name }</li>
               })
            }
         </ul>

         <button
            disabled={ isLoading }
            onClick={ () => dispatch(getPokemons(page)) }
         >
            Next
         </button>
      </>
   )
}

export default AppPokemon