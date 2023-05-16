import styles from '../styles/Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }: Partial<ButtonProps>) => {
  return (
    <button onClick={onClick} className={styles.btn} {...rest}>{children}</button>
  )
}

export default Button