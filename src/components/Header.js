import { Flex, Text, Box, Button } from '@chakra-ui/react';

export function Header() {

    return (

        <Box
            as="header"
            width="100%"
            backgroundColor="gray.600"
            paddingTop="4"
            paddingBottom="32"
        >
            <Flex
                width="100%"
                maxWidth={1200}
                marginX="auto"
                justifyContent="space-between"
                paddingX="2"
            >
                <Text
                    color="gray.50"
                    fontSize="3xl"
                    fontWeight="bold"
                >
                    Movies
                </Text>

                <Button
                    backgroundColor="gray.700"
                    color="gray.50"
                    _hover={{
                        backgroundColor: "gray.800",
                        color: "gray.50"
                    }}
                >
                    Github
                </Button>

            </Flex>

        </Box>

        
    )

}