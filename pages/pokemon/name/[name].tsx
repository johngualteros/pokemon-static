import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { PokemonListResponse, SmallPokemon } from "@/interfaces"
import { GetStaticProps, NextPage } from "next"
import { Pokemon } from '../../../interfaces/pokemon-full';
import { Card, Button, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";

import confetti from 'canvas-confetti';

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isInFavorites, setIsInFavorites] = useState(localFavorites.isFavorite(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorites(localFavorites.isFavorite(pokemon.id));

        if (!isInFavorites) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    return (
        <Layout title={pokemon.name}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "30% 40%",
                gap: "10px",
                justifyContent: "center",
                placeItems: "center",
                marginTop: "20px"
            }}>
                <Card
                    isHoverable
                    isFooterBlurred
                    radius="lg"
                    className="border-none relative p-8"
                >
                    <Image src={pokemon.sprites.other?.dream_world.front_default || ''} alt={pokemon.name} width={200} height={200}
                        className="object-cover relative z-20 pointer-events-none"
                    />
                    <Image src={pokemon.sprites.other?.dream_world.front_default || ''} alt={pokemon.name} width={200} height={200}
                        className="object-cover absolute top-1 left-0 scale-125 z-10 opacity-100 transition-opacity duration-300 ease-in-out filter blur-md"
                    />
                </Card>

                <Card
                    radius="lg"
                    className="border-none p-8 w-full min-w-max"
                >
                    <CardHeader
                        className="flex justify-between items-center"
                    >
                        <h1 className="text-2xl font-bold text-center uppercase">{pokemon.name}</h1>

                        <Button className="bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-lg" variant='shadow' onClick={onToggleFavorite}>{isInFavorites ? 'Delete of favorites' : 'Save in favorites'}</Button>
                    </CardHeader>

                    <CardBody>
                        <h1 className="text-cyan-500 font-black">Sprites: </h1>
                        <div className="flex justify-between items-center">
                            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                            <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")
    const pokemonsNames = data.results.map((pokemon) => pokemon.name)
    return {

        paths: pokemonsNames.map((pokemon) => ({
            params: {
                name: pokemon
            }
        })),

        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    let pokemon;
    try {
        const res = await pokeApi.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ctx.params?.name}`)

        pokemon = {
            id: res.data.id,
            name: res.data.name,
            sprites: res.data.sprites,
        };
    } catch (error) {
        pokemon = null;
    }

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }


    return {
        props: {
            pokemon
        }
    }
}

export default PokemonByNamePage