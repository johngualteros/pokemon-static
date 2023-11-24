import { ReactNode } from "react"

import Head from "next/head"
import { NavbarComponent } from "../ui"

type LayoutProps = {
    children: ReactNode,
    title?: string
}

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{ title ?? 'Pokemon App' }</title>
                <meta name="author" content="John Gualteros" />
                <meta name="description" content="Information about the pokemon" />
                <meta name="keywords" content="pokemon, nextjs, react, pokedex" />
            </Head>

            {/* NAVBAR */}
            <NavbarComponent />

            <main>
                { children }
            </main>
        </>
    )
}