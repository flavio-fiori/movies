import { Divider, Table as ChakraTable, Tbody, Td, Th, Thead, Tr, Tfoot, Icon, Flex, Box, Image } from '@chakra-ui/react';
import { Fragment } from 'react';
import { RiMovie2Line } from 'react-icons/ri';

import { useMovies } from '../hooks/useMovies';

export function Table() {

    const { movies } = useMovies();

    return (
        <Fragment>
            
            {
                movies.length > 0 && 


                <Fragment>
                    

                    <Divider marginY="8" borderColor="gray.400" />
                    <Flex
                    justifyContent="space-between"
                    >

                        <Box
                            flex="1"
                            marginRight="4"
                        >
                            <Image src="/images/movies.png" alt="Ilustração de filme" />
                        </Box>

                        <ChakraTable
                            marginTop="8" 
                            colorScheme="blackAlpha"
                            maxWidth={600}>

                            <Thead>
                                <Tr>
                                    <Th></Th>
                                    <Th>Ano de Lançamento</Th>
                                    <Th>Quantidade de filmes</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                        
                                {

                                    movies.map(movie => (

                                        <Tr key={`year-${movie.year}`}>
                                            <Td><Icon as={ RiMovie2Line } /></Td>
                                            <Td>{ movie.year }</Td>
                                            <Td>{ movie.movies } filmes</Td>
                                        </Tr>

                                    ))

                                }

                            </Tbody>

                            <Tfoot>
                                <Tr>
                                    <Td colSpan="3" textAlign="center">Total: 35</Td>
                                </Tr>
                            </Tfoot>

                        </ChakraTable>

                    </Flex>
                    
                </Fragment>
            
            }
            
        </Fragment>
    )

}