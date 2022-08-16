import { useState} from 'react'

const Pokemon = ({pokemon, pokedexNumber}) => {
    const [image, setImage] = useState("")
    const [type1, setType1] = useState("")
    const [type2, setType2] = useState("")

if(!pokemon.length) return
     const pokemonName = pokemon[pokedexNumber-1].name
    const pokemonEntry = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((info) => info.json()).then((results) => {
        const imageURL = results.sprites.other['official-artwork'].front_default
        if(results.types.length > 1){
            const firstType = results.types[0].type.name
            const type1 = firstType.charAt(0).toUpperCase() + firstType.slice(1)
            const secondType = results.types[1].type.name
            const type2 = secondType.charAt(0).toUpperCase() + secondType.slice(1)
            setType1(type1)
            setType2(type2)
        } else {
            const firstType = results.types[0].type.name
            const type1 = firstType.charAt(0).toUpperCase() + firstType.slice(1)
            setType1(type1)
            setType2("")
        }
            setImage(imageURL)
    }).catch((err) => {
        console.log(err)
    })

    


    return (
        <div className="pokemon">
        <div className="image">
            <img className="image"src={image} alt={pokemonEntry}></img>
        </div>
        <div className="name">
            <p>{pokemonEntry}</p>
            
        </div>
        <div className={`${type2 !== "" ? "types" : "type"}`}>
        <p>{type1}</p><p>{type2}</p>
        </div>
        <div className="count">
            <p>{pokedexNumber}/{pokemon.length}</p>
        </div>
        </div>
    )
}

export default Pokemon