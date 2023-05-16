import { useState } from 'react'
import { usePokemon } from './hooks/usePokemon'
import Footer from './components/Footer'
import Form from './components/Form'
import Pokemon from './components/Pokemon'
import './App.css'


function App() {
  const pokemon = usePokemon()
  const [hasWon, toggleWon] = useState<boolean>(false)

  return (
    <div className='container'>
      <main>
        <h1 className='app_title'>¿Quien es ese Pokémon?</h1>
        <Pokemon />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default App
