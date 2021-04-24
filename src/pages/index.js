import { Flex } from '@chakra-ui/react';

import { Header } from './../components/Header';
import { Content } from '../components/Content';

export default function Home() {
    return (

        <Flex flexDirection="column" height="100vh">

            <Header />

            <Content />

        </Flex>

    )
}
