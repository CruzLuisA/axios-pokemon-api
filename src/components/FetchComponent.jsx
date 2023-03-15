import React, { useState } from 'react'
import axios from 'axios'

const AxiosComponent = () => {
    const [pokemon, setPokemon] = useState();
    const axiosPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then( response => setPokemon(response.data.results))
        .catch(err=>console.log(err))
    }
    return (
    <div>
        <h1>Fetching Pokemon</h1>
        <button onClick={ axiosPokemon } >Axios Fetch Pokemon</button>
        <div>
            {pokemon&&
            <div>{pokemon.map((item) =>{
                    return <p key={item.name} > {item.name} </p>
            })}
            </div>
        }
            
        </div>
    </div>
    
    )
}

export default AxiosComponent