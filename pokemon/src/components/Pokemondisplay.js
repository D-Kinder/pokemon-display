import React from 'react'
import Previouspokemon from './Previouspokemon'
import Nextpokemon from './Nextpokemon'
import Pokemon from './pokemon'
import {useState, useEffect} from 'react'

const Pokemondisplay =() => {
    const [pokemon, setPokemon] = useState([])
    const [pokedexNumber, setPokedexNumber] = useState(1)

useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200").then((pokemon) => {
        return pokemon.json()
    }).then(({results}) => {
        const pokemonArray = []
        for (const pokemon of results){
            pokemonArray.push(pokemon)
        }
        setPokemon(pokemonArray)
    })
}, [])
    return (
        <div className="pokemon-display">
            <Previouspokemon pokedexNumber={pokedexNumber} setPokedexNumber={setPokedexNumber}/>
            <Pokemon pokedexNumber={pokedexNumber} pokemon={pokemon}/>
            <Nextpokemon pokedexNumber={pokedexNumber} setPokedexNumber={setPokedexNumber} pokemon={pokemon}/>
        </div>
    )
}
export default Pokemondisplay