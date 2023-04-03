import Image from 'next/image'

import styles from './Pokemon.module.css'
import Link from 'next/link'

export default async function Pokemon({ pokemonParam, params }) {
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}${params.pokemonId}`, {
    next: {
      revalidate: 3600
    },
    cache: 'default'
  })
  const data = await res.json()

  const pokemon = data
  return (
    <>
      <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          height='200'
          width='200'
          alt={pokemon.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles['type_' + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
        <Link className={styles.voltar} href='/'>
          Voltar
        </Link>
      </div>
    </>
  )
}
