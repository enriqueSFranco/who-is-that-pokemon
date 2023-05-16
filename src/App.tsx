import { useState } from 'react'
import { usePokemon } from './hooks/usePokemon'
import Form from './components/Form'
import Pokemon from './components/Pokemon'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'


function App() {
  const [hasWon, toggleWon] = useState<boolean>(false)
  const { pokemon, loading } = usePokemon()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('enviando')
    const $form = e.target as HTMLFormElement
    const field = new FormData($form)
    const poke = field.get('pokemon')

    if (typeof poke === 'string' && poke !== '') {
      // verificar si el poke ingresado por el usuario es igual al que se genero
      if (poke.toLowerCase() === pokemon?.pokemonName.toLocaleLowerCase()) {
        toggleWon(true)
      }
    }
  }

  return (
    <div className='container'>
      <main>
        <h1 className='app_title'>¿Quien es ese Pokémon?</h1>
        <Pokemon pokemon={pokemon} loading={loading} hasWon={hasWon} />
        <Form onSubmit={handleSubmit} />
        {hasWon && <Button onClick={() => window.location.reload()}>Jugar de nuevo</Button>}
      </main>
      <Footer />
    </div>
  )
}

export default App
