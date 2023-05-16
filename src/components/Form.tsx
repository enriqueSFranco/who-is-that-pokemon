import React from 'react'
import styles from '../styles/Form.module.css'
import Button from './Button'

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className={styles.boxInput}>
        <input type='text' name='pokemon' placeholder='bulbasaur' />
        <Button>adivinar</Button>
      </div>
    </form>
  )
}

export default Form