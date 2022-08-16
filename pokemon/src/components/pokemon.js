const Pokemon = ({pokemon, pokedexNumber}) => {
    if(!pokemon.length) return
     const pokemonName = pokemon[pokedexNumber-1].name
    const pokemonEntry = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

    


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