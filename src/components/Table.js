import { Divider, Table as ChakraTable, Tbody, Td, Th, Thead, Tr, Tfoot, Icon, Flex, Box, Image, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { RiErrorWarningLine, RiMovie2Line } from 'react-icons/ri';

import { useMovies } from '../hooks/useMovies';

export function Table() {

    const { movies } = useMovies();
    const { moviesByYear, total } = movies;

    return (
        <Fragment>
            
            {
                moviesByYear?.length > 0 && ( 

                    <Fragment>                    

                    <Divider marginY={[6, 6, 8]} borderColor="gray.400" />

                    <Flex
                        justifyContent="space-between"
                    >

                        <Box
                            flex="1"
                            marginRight="4"
                            display={['none', 'none', 'block']}
                        >
                            <Image src="/images/movies.png" alt="Ilustração de filme" />
                        </Box>

                        <ChakraTable
                            marginTop={[2, 2, 8]}
                            colorScheme="blackAlpha"
                            maxWidth={600}>

                            <Thead>
                                <Tr>
                                    <Th display={['none', 'table-cell']}></Th>
                                    <Th>Ano de Lançamento</Th>
                                    <Th>Quantidade de filmes</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                        
                                {

                                    moviesByYear.map(movie => (

                                        <Tr key={`year-${movie.year}`}>
                                            <Td display={['none', 'table-cell']}><Icon as={ RiMovie2Line } /></Td>
                                            <Td>{ movie.year }</Td>
                                            <Td>{ movie.movies } filmes</Td>
                                        </Tr>

                                    ))

                                }

                            </Tbody>

                            <Tfoot>
                                <Tr>
                                    <Td colSpan="3" textAlign="center">Total: { total }</Td>
                                </Tr>
                            </Tfoot>

                        </ChakraTable>

                    </Flex>
                    
                </Fragment>
                
                )

            }

            {
                total === 0 && (

                    <Text
                        color="red.500"
                        marginTop="8"
                        fontSize="24"
                    >
                        <Icon 
                            marginRight="2"
                            as={ RiErrorWarningLine } />
                        Termo de busca não encontrada
                    </Text>    

                )
            }
            
        </Fragment>
    )

}