import { useEffect, useState } from 'react'
import { getRandomPokemon } from '../services/getRandomPokemon'

export function usePokemon() {
  const [pokemon, updatePokemon] = useState({})

  useEffect(() => {
    getRandomPokemon()
      .then(response => updatePokemon(response))
      .catch(error => console.error(error))
  }, [])

  return pokemon
}
