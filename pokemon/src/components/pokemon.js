import {useState} from 'react'

const Pokemon = ({pokemon, pokedexNumber}) => {
    const [image, setImage] = useState("")
    const [type1, setType1] = useState("")
    const [type2, setType2] = useState("")

    if(!pokemon.length) return
     const pokemonName = pokemon[pokedexNumber-1].name
    const pokemonEntry = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((info) => {
        return info.json()
    }).then((results) => {
        const imageURL = results.sprites.front_default
        const type1 = results.types[0].type.name
        const type2 = results.types[1].type.name
        setType1(type1)
        setType2(type2)
        setImage(imageURL)
    })
    


    return (
        <div className="pokemon">
        <div className="image">
            <img src={image} alt="Image of Pokemon"></img>
        </div>
        <div className="name">
            <p>{pokemonEntry}</p>
            
        </div>
        <div className="types">
        <p>{type1}</p><p>{type2}</p>
        </div>
        <div className="count">
            <p>{pokedexNumber}/{pokemon.length}</p>
        </div>
        </div>
    )
}

export default Pokemon