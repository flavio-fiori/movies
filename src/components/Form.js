import { useState } from 'react';

import { Box, Divider, Heading, HStack, Input, Button } from '@chakra-ui/react';
import { api } from '../service/api';
import { useMovies } from '../hooks/useMovies';

export function Form() {

    const [titleMovie, setTitleMovie] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { saveMovies } = useMovies();

    const handleSubmit = async () => {

        setIsLoading(true);

        const response = await api(`/movies/count?Title=${titleMovie}`);

        setIsLoading(false)

        const { moviesByYear } = response.data;

        saveMovies([...moviesByYear]);

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

            <HStack spacing="4">

                <Input
                    onChange={ event => setTitleMovie(event.target.value)}
                    borderColor="gray.400"
                    variant="outline" 
                    placeholder="Título desejado..." />

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