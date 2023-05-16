import { API } from '../share/consts'
import type { Pokemon, Sprites, ErrorResponse } from '../share/types'

const getPokemonImage = (sprites: Sprites): string => {
  const pokemonImage = sprites.other?.dream_world?.front_default ?? sprites.other?.home?.front_default
  return pokemonImage ?? ''
}

const getDetailsPokemon = async (urlPokemon: string): Promise<Pokemon> => {
  try {
    const urlPoke = new URL(urlPokemon)
    const response = await fetch(urlPoke)
    if (!response.ok) {
      const statusCode = response.status === 0 || response.status === null ? 'Oppps, ha ocurrido un error durante la peticion.' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Oppps, ha ocurrido un error' : response.statusText
      const error: ErrorResponse = {
        err: new Error('Opps, ha ocurrido un error durante la petición.'),
        statusCode,
        statusText
      }
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw error
    }
    const pokemon = await response.json()
    return pokemon
  } catch (error: any) {
    return error
  }
}

export const getRandomPokemon = async (): Promise<{ pokemonName: string, pokemonImage: string }> => {
  try {
    const urlPokeApi = new URL(API.POKEAPI)
    urlPokeApi.searchParams.set('limit', '100')
    urlPokeApi.searchParams.set('offset', '0')

    const response = await fetch(urlPokeApi)

    const { results } = await response.json()
    const pokemon = results.sort(() => Math.random() * results.length)
    const { name: pokemonName, url: urlPokemon } = pokemon[0]
    const pokemonImage: Pokemon = await getDetailsPokemon(urlPokemon)
    return { pokemonName, pokemonImage: getPokemonImage(pokemonImage.sprites) }
  } catch (error: any) {
    return error
  }
}
