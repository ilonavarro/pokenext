import styles from './Footer.module.css'

let year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; {year}
        {/* <span>PokeNext</span> &copy; 2023 */}
      </p>
    </footer>
  )
}
