import { Box, Text, Heading, } from '@chakra-ui/react';
import Footer from './Footer';
import TopHeader from './TopHeader';

const About = () => {
    const sh: number = window.innerHeight - 100
    return (
        <Box bg='#e9edf6'>  
        <TopHeader />
        <Box h={sh}>
        <Box w='80%' padding='2%' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black' m='5vw auto'>
            <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>About</Heading>
            <Text color='gray' textAlign='center' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>This app was developed in response to the darthness in the availabilty of portable free CV maker which within a few clicks and checks can come up with a standard CV molded to your liking while having no compromise whatsoever in the aspect of quality.</Text>
        </Box>
        </Box>
        <Footer />
        </Box>
    )
}

export default About;