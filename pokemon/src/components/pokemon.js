const Pokemon = ({pokemon, pokedexNumber}) => {
    console.log(pokemon[150].name)
    console.log(pokedexNumber)
     const pokemonName = pokemon[pokedexNumber-1].name
     console.log(pokemonName)
    const pokemonEntry = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    console.log(pokemonEntry)


    return (
        <div className="pokemon">
        <div className="image"></div>
        <div className="name">
            <p>{pokemonEntry}</p>
        </div>
        <div className="count">
            <p>{pokedexNumber}/{pokemon.length}</p>
        </div>
        </div>
    )
}

export default Pokemon