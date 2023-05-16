import { useEffect, useState } from 'react'
import { getRandomPokemon } from '../services/getRandomPokemon'
import { type RandomPokemon } from '../share/types'

export function usePokemon() {
  const [pokemon, updatePokemon] = useState<RandomPokemon | null>(null)
  const [loading, updateLoading] = useState<boolean>(false)

  useEffect(() => {
    updateLoading(true)
    getRandomPokemon()
      .then(response => updatePokemon(response))
      .catch(error => console.error(error))
      .finally(() => updateLoading(false))
  }, [])

  return { pokemon, loading }
}
