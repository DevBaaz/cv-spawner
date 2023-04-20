import CvModal from './CvModal';
import { Heading, Text, Flex, Box, Link, Button, Stack} from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import TopHeader from "./TopHeader";
import Footer from "./Footer";

const Home = () => {
    return (
        <Box bg='#e9edf6'>
          <TopHeader />
          <Box display={{ lg: 'flex' }} alignItems='center' justifyContent={{lg: 'space-evenly' }} mt={{base:'7vw', sm: '5vw', md:'4vw', lg:'2vw'}} mb={{base:'7vw', sm: '5vw', md:'4vw', lg:'2vw'}}>
          <Box w={{ base: '70%', lg: '40%'}} padding='2%' m={{ base: '5vw auto', lg: '0.5vw 0'}} textAlign='center' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black'>
              <Stack spacing='15'>
                <Text color='gray' textAlign='center' fontWeight='bold' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Traditional/Chronological CV</Text>
                <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Emphasize your career progression & experience.</Heading>
                <Button colorScheme='gray'><Link textDecoration='none' href='./Tcv' color='#41729F' _hover={{textDecoration :'none'}} fontWeight='bold'><NavLink to='/tcv'/>Create</Link></Button>
              </Stack>
            </Box>
            <Box w={{ base: '70%', lg: '40%'}} padding='2%' m={{ base: '5vw auto', lg: '0.5vw 0'}} textAlign='center' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black'>
              <Stack spacing='15'>
                <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>See an Example:</Heading>
                <CvModal modalPage='Traditional/Chronological CV (Page 1 of 2)' modalTitle='Traditional/Chronological CV' imageSrc='tcv1.jpg' />
                <CvModal modalPage='Traditional/Chronological CV (Page 2 of 2)' modalTitle='Traditional/Chronological CV' imageSrc='tcv2.jpg' />
              </Stack>
            </Box>
          </Box>
          <Box display={{ lg: 'flex' }} alignItems='center' justifyContent={{lg: 'space-evenly' }} mt='2vw'>
            <Box w={{ base: '70%', lg: '40%'}} padding='2%' m={{ base: '5vw auto', lg: '0.5vw 0'}} textAlign='center' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black'>
              <Stack spacing='15'>
                <Text color='gray' fontWeight='bold' textAlign='center' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Functional/Skill-Based CV</Text>
                <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Emphasize your skills & personal qualities.</Heading>
                <Button colorScheme='gray'><Link textDecoration='none' href='./Fcv' color='#41729F' _hover={{textDecoration :'none'}} fontWeight='bold'><NavLink to='/fcv'/>Create</Link></Button>
              </Stack>
            </Box>
            <Box w={{ base: '70%', lg: '40%'}} padding='2%' m={{ base: '5vw auto', lg: '0.5vw 0'}} textAlign='center' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black'>
              <Stack spacing='15'>
                <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>See an Example:</Heading>
              <CvModal modalPage='Functional/Skill-Based CV (Page 1 of 2)' modalTitle='Functional/Skill-Based CV' imageSrc='fcv1.jpg' />
              <CvModal modalPage='Functional/Skill-Based CV (Page 2 of 2)' modalTitle='Functional/Skill-Based CV' imageSrc='fcv2.jpg' />
              </Stack>
            </Box>
          </Box>
          <Footer />
        </Box>
    )
}

export default Home;