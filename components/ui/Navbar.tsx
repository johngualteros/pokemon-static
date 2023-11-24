
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const NavbarComponent = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NextLink href="/">
        <NavbarBrand>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width={50} height={50} alt="brand logo" />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NextLink>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/favorites" as={NextLink}>
            <Button color="primary" variant="flat">
              Favorites
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
