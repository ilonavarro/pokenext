import Image from 'next/image'
import styles from './About.module.css'

export const metadata = {
  title: 'About'
}

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ex ea atque sunt
        itaque et dicta quam hic eaque cupiditate labore, accusamus sit, autem aspernatur
        eligendi voluptatibus sequi vero aperiam.{' '}
      </p>
      <Image
        src='/images/charizard.png'
        width='300'
        height='300'
        alt='The pokemon Charizard with your wings open'
        priority
      />
    </div>
  )
}
