const Nextpokemon = ({pokedexNumber, setPokedexNumber, pokemon}) => {

    const incrementPokedexNumber = () => {
        if(pokedexNumber < pokemon.length){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber + 1
            })
        }
    }
return (
    <div className="next-pokemon">
    <img src={require("../images/righty.png")} alt="TEST" onClick={incrementPokedexNumber}></img>
    </div>
)
}

export default Nextpokemon