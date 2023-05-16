import styles from '../styles/Form.module.css'

const Form = () => {
  return (
    <form>
      <div className={styles.boxInput}>
        <input type="text" placeholder='bulbasur' />
        <button>adivinar</button>
      </div>
    </form>
  )
}

export default Form