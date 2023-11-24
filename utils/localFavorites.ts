import { type } from "os";

const toggleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(favorites.includes(id)) {
        favorites = favorites.filter(favorite => favorite !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const isFavorite = (id: number): boolean => {
    if (typeof window === 'undefined') return false;
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const getFavorites = () => {
    if (typeof window === 'undefined') return [];
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
}

const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');    
}

export default {
    toggleFavorite,
    isFavorite,
    getFavorites,
    pokemons
}