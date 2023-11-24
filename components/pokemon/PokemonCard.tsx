import { SmallPokemon } from "@/interfaces"
import { Button, Card, CardFooter } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/router"

type PokemonCardProps = {
    pokemon: SmallPokemon,
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }
    return (
        <Card
            isHoverable
            isFooterBlurred
            radius="lg"
            className="border-none relative"
        >
            <Image src={pokemon.image} alt={pokemon.name} width={200} height={200}
                className="object-cover relative z-20 pointer-events-none"
            />
            <Image src={pokemon.image} alt={pokemon.name} width={200} height={200}
                className="object-cover absolute top-1 left-0 scale-125 z-10 opacity-100 transition-opacity duration-300 ease-in-out filter blur-md"
            />

            <CardFooter className="z-40 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1">
                <p className="text-tiny text-white/80 font-black uppercase">{pokemon.name}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={onClick}>
                    SEE
                </Button>
            </CardFooter>
        </Card>
    )
}
