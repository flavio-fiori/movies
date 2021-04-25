import { Box } from '@chakra-ui/react';

import { MoviesProvider } from './../hooks/useMovies';

import { Form } from './Form';
import { Table } from './Table';

export function Content() {

    return (

        <MoviesProvider>

            <Box
                as="main"
                width="100%"
                marginTop="-20"
                backgroundColor="gray.200"
                padding={[4, 4, 8]}
                maxWidth={1200}
                marginX="auto"
                borderRadius="4"
                boxShadow="base"
            >

                <Form />

                <Table />
                
            </Box>

        </MoviesProvider>

        
    )

}