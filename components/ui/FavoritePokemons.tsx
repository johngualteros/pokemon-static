import { Card, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

type FavoritePokemonsProps = {
    favoritePokemons: number[],
}

export const FavoritePokemons = ({favoritePokemons} : FavoritePokemonsProps) => {
    const router = useRouter()

    const onClick = (id: number) => {
        router.push(`/pokemon/${id.toString()}`)
    }
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "10px",
            justifyContent: "center",
            placeItems: "center"
          }}>
            {
                favoritePokemons.map((pokemonId: number) => (
                    <Card
                        key={pokemonId}
                        isHoverable
                        isFooterBlurred
                        radius="lg"
                        className="border-none relative p-8 cursor-pointer"
                        onClick={() => onClick(pokemonId)}
                    >
                        <Image
                            key={pokemonId}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                            width={200}
                            height={200}
                        />
                    </Card>
                ))
            }
          </div>
    )
}
