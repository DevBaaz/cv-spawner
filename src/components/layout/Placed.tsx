import { Flex } from '@chakra-ui/react';

type props = { children: any }

const Placed: React.FC<any> = ({ children}: props)  => {
    return (
        <Flex flexDirection='row' justifyContent='space evenly' bg='black'  m='3vw 0 0 0'>{children}</Flex>
    )
}

export default Placed;