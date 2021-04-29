import { useState } from 'react';
import { Box, Divider, Heading, HStack, Input, Button, FormControl, FormHelperText } from '@chakra-ui/react';

import { api } from '../service/api';
import { useMovies } from '../hooks/useMovies';

export function Form() {

    const [titleMovie, setTitleMovie] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const { saveMovies } = useMovies();

    const handleSubmit = async () => {
        
        if(0 >= titleMovie.length) {
            setError(true);
            return;
        }
        
        setError(false);
        setIsLoading(true);

        const response = await api(`/movies/count?Title=${titleMovie}`);

        setIsLoading(false);

        const { moviesByYear, total } = response.data;

        saveMovies({ moviesByYear, total });

    };

    return (

        <Box
        >

            <Heading
                color="gray.700"
            >
                Buscar Filmes:
            </Heading>

            <Divider marginY="8" borderColor="gray.400" />

            <HStack as="form" spacing="4" alignItems="flex-start">

                <FormControl>

                    <Input
                        isInvalid={error}
                        onChange={ event => setTitleMovie(event.target.value)}
                        borderColor="gray.400"
                        variant="outline" 
                        placeholder="Título desejado..." />

                    <FormHelperText>* Campo obrigatório</FormHelperText>

                </FormControl>

                {
                    !isLoading ? (
                        <Button
                            type="submit"
                            backgroundColor="gray.700"
                            color="gray.50"
                            _hover={{
                                backgroundColor: "gray.800",
                                color: "gray.50"
                            }}
                            onClick={ handleSubmit }
                        >
                            Buscar
                        </Button>
                    ) : (

                        <Button isLoading>Buscar</Button>

                    )
                }

            </HStack>

        </Box>

        
    )

}