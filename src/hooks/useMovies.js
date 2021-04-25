import { createContext, useContext, useState } from 'react';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {

    const [movies, setMovies] = useState({});

    const saveMovies = newList => setMovies(newList);

    return(

        <MoviesContext.Provider value={{ movies, saveMovies }}>

            { children }

        </MoviesContext.Provider>

    )

};

export const useMovies = () => {

    const context = useContext(MoviesContext);

    return context;

};