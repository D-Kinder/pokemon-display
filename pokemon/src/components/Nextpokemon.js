import {useState} from 'react'

const Nextpokemon = ({pokedexNumber, setPokedexNumber, pokemon}) => {
    const [nextImage, setNextImage] = useState("")
    if(!pokemon.length) return

    const incrementPokedexNumber = () => {
        if(pokedexNumber < pokemon.length-1){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber + 1
            }) 
        } else if (pokedexNumber === pokemon.length-1){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber + 1
            })
            setNextImage("")
        }
    }

    let pokemonName = ""
    if(pokedexNumber <= pokemon.length-1){
        pokemonName = pokemon[pokedexNumber].name
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((info) => info.json()).then((results) => {
        const imageURL = results.sprites.other['official-artwork'].front_default
        setNextImage(imageURL)
    })
    }
return (
    <div className="next-pokemon">
        <img src={nextImage} alt={pokemonName}></img>
        <img src={require("../images/righty.png")} alt="TEST" onClick={incrementPokedexNumber}></img>
    </div>
)
}

export default Nextpokemon