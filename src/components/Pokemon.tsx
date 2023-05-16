import { type RandomPokemon } from '../share/types'
import styles from '../styles/Pokemon.module.css'


interface PokemonProps {
  pokemon: RandomPokemon | null
  loading: boolean
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <figure className={styles.wrapper_pokemon}>
      <img
        src={pokemon?.pokemonImage}
        alt="poke"
        style={{ imageRendering: 'pixelated', filter: 'brightness(0)' }}
      />
      <figcaption>name pokemon</figcaption>
    </figure>
  )
}

export default Pokemon