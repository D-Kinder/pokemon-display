import {useState} from 'react'

const Previouspokemon = ({pokedexNumber, setPokedexNumber, pokemon}) => {
    const [prevImage, setPrevImage] = useState("")

    if(!pokemon.length) return
    const decrementPokedexNumber = () => {
        if(pokedexNumber > 2){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber - 1
            })
        } else if(pokedexNumber ===2){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber - 1
            })
            setPrevImage("")
        }
    }
    let pokemonName = ""
    if(pokedexNumber > 1){
        pokemonName = pokemon[pokedexNumber-2].name
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((info) => info.json()).then((results) => {
        const imageURL = results.sprites.other['official-artwork'].front_default
        setPrevImage(imageURL)
    })
    }
    return (
            <div className="previous-pokemon">
                <img src={prevImage} alt={pokemonName}></img>
                <img src={require("../images/lefty.png")} alt="Previous Pokemon" onClick={decrementPokedexNumber}></img>
            </div>
        )
    }


export default Previouspokemon