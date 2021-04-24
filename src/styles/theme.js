import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: 'Ubuntu',
        body: 'Ubuntu'
    },
    styles: {
        global: {
            body: {
                backgroundColor: 'gray.100',
                color: "gray.900"
            }
        }
    }
})