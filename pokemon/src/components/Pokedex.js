import React from 'react'
import Greeting from './Greeting'
import Pokemondisplay from './Pokemondisplay'

const Pokedex = () => {
    return (
        <div className="pokedex">
            <Greeting />
            <Pokemondisplay />
        </div>
    )

}

export default Pokedex