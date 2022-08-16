const Previouspokemon = ({pokedexNumber, setPokedexNumber}) => {

    const decrementPokedexNumber = () => {
        if(pokedexNumber > 1){
            setPokedexNumber((currentPokedexNumber) => {
                return currentPokedexNumber - 1
            })
        }
    }
        return (
            <div className="previous-pokemon">
                <img src={require("../images/lefty.png")} alt="Previous Pokemon" onClick={decrementPokedexNumber}></img>
            </div>
        )
    }


export default Previouspokemon