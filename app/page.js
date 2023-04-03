import Card from '@/components/Card'
import styles from './page.module.css'
import Image from 'next/image'
import { Suspense } from 'react'

// export async function getStaticProps() {
//   const maxPokemons = 251
//   const api = 'https://pokeapi.co/api/v2/pokemon/'

//   const res = await fetch(`${api}?limit=${maxPokemons}`)
//   const data = await res.json()

//   console.table(data)
// }

export default async function Home() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}?limit=${maxPokemons}`, {
    next: {
      revalidate: 3600
    },
    cache: 'default'
  })
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  const pokemons = data.results

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='Pokebola' />
      </div>
      <Suspense fallback={<p>Carregando Pokémons...</p>}>
        <div className={styles.pokemon_container}>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      </Suspense>
    </>
  )
}
