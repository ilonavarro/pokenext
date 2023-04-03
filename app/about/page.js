import Image from 'next/image'
import styles from './About.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'About'
}

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Este é um projeto feito inteiramente com o que há de mais novo na área de Frontend
        hoje, dia 03/04/2023.{' '}
      </p>
      <p>
        Ele consiste em utilizar a biblioteca React 18.2.0 com o framework Next 13.2.4,
        utilizando a nova funcionalidade, ainda experimental, appDir, que adiciona uma
        pasta app no projeto, substituindo a pasta pages.
      </p>
      <p>
        Outros recursos que utilizei são as novas funcionalidades de SEO com exportação da
        constante "metadata", os módulos "async" (async functions diretamente nos módulos)
        e uso direto da fetch do novo Next diretamente no projeto, com "revalidate",
        "cache" e suprimindo "getStaticProps" e "getStaticPaths".
      </p>
      <p>
        Você encontra esse projeto no meu repositório no{' '}
        <Link href='https://github.com/ilonavarro/pokenext' rel='follow'>
          GitHub
        </Link>{' '}
        e ele foi baseado no curso de Next do{' '}
        <Link
          href='https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft'
          rel='nofollow'
          target='_blank'
        >
          Matheus Battisti
        </Link>
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
