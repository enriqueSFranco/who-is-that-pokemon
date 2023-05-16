import { type RandomPokemon } from '../share/types'
import styles from '../styles/Pokemon.module.css'
import Loader from './Loader'


interface PokemonProps {
  pokemon: RandomPokemon | null
  loading: boolean
  hasWon: boolean
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon, loading, hasWon }) => {
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <figure className={styles.wrapper_pokemon}>
      <img
        src={pokemon?.pokemonImage}
        alt="poke"
        style={{ imageRendering: 'pixelated', filter: `${hasWon ? 'none' : 'brightness(0)'}` }}
      />
    </figure>
  )
}

export default Pokemon