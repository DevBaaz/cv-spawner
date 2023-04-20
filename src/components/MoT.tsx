import { Box, Text, Heading, List, ListItem, ListIcon} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Footer from './Footer';
import TopHeader from './TopHeader';

const MoT = () => {
    const sh: number = window.innerHeight
    return (
        <Box bg='#e9edf6'>  
        <TopHeader />
        <Box h={sh}>
        <Box w='80%' padding='2%' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black' m='5vw auto'>
            <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>More on Traditional CV</Heading>
            <Text color='gray' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>This type of CV lists your details, under appropriate headings, starting with the most recent. This format of CV can suit best if you…</Text>
            <List spacing={1} color='gray' fontWeight='bold'fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>
                <ListItem><ListIcon as={MdCheckCircle} />have experience and skills that closely relate to the job you're applying for</ListItem>
                <ListItem><ListIcon as={MdCheckCircle} />want to emphasise career progression</ListItem>
                <ListItem><ListIcon as={MdCheckCircle}/>have had mainly continuous employment with no gaps.</ListItem>
            </List>
            <Text color='gray' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>If you want to use this format and have gaps in your work history, give an appropriate reason for them, such as bringing up a family.</Text>
        </Box>
        </Box>
        <Footer />
        </Box>
    )
}

export default MoT;