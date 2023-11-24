import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { PokemonCard } from "@/components/pokemon"
import { PokemonListResponse, SmallPokemon } from "@/interfaces"
import { GetStaticProps, NextPage } from "next"

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title="Home">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        justifyContent: "center",
        placeItems: "center"
      }}>
          {
          pokemons.map((pokemon: SmallPokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
          }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")

  const pokemons: SmallPokemon[] = data.results.map((pokemon) => {
    const urlParts = pokemon.url.split("/")
    const idPokemon = Number(urlParts[urlParts.length - 2]);
    return {
      ...pokemon,
      id: idPokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`
    }
  })
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
