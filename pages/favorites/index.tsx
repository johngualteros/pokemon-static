import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout';
import {Button, Card, CardFooter, Image} from "@nextui-org/react";
import { NoFavorites } from '@/components/ui/NoFavorites';
import { localFavorites } from '@/utils';
import { useRouter } from 'next/router';
import { FavoritePokemons } from '@/components/ui/FavoritePokemons';

const FavoritePage: NextPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title="Favorites">
            {
                favoritePokemons.length === 0
                ? (
                    <NoFavorites />
                )
                : (
                    <FavoritePokemons favoritePokemons={favoritePokemons} />
                ) 
            }
        </Layout>
    )
}

export default FavoritePage