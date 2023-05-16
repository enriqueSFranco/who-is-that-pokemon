import styles from '../styles/Pokemon.module.css'

const Pokemon = () => {
  return (
    <figure className={styles.wrapper_pokemon}>
      <img
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
        alt="poke"
        style={{ imageRendering: 'pixelated', filter: 'brightness(0)' }}
      />
      <figcaption>name pokemon</figcaption>
    </figure>
  )
}

export default Pokemon