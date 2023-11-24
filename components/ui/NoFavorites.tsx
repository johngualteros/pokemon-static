import { Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    }}>
        <h1>Not Got Favorites</h1>
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            width={300}
            height={300}
        />
    </div>
  )
}