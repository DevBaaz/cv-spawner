import { Box, Text, Heading, List, ListItem, ListIcon} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import Footer from './Footer';
import TopHeader from './TopHeader';

const MoF = () => {
    const sh: number = window.innerHeight 
    return (
        <Box bg='#e9edf6'>  
        <TopHeader />
        <Box h={sh}>
        <Box w='80%' padding='2%' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black' m='5vw auto'>
            <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>More on Functional CV</Heading>
            <Text color='gray' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>This type of CV emphasises your skills and personal qualities rather than your employment history. This format of CV can suit best if you…</Text>
            <List spacing={1} color='gray' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>
                <ListItem><ListIcon as={MdCheckCircle} />are changing career and want to show employers how transferable skills gained in other types of employment will be relevant for the post.</ListItem>
                <ListItem><ListIcon as={MdCheckCircle} />have extensive gaps in your employment history, because they are not as prominent as they would be in a date-listed order in a chronological CV. Be prepared though to explain any gaps at interview.</ListItem>
                <ListItem><ListIcon as={MdCheckCircle}/>have had a series of short term paid or voluntary roles; this format enables you to group together related skills and achievements gained from these.</ListItem>
            </List>
            <Text color='gray' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>If you want to use this format and have gaps in your work history, give an appropriate reason for them, such as bringing up a family.</Text>
        </Box>
        </Box>
        <Footer />
        </Box>
    )
}

export default MoF;