import { Box, Link, Stack, Text, Flex } from "@chakra-ui/react";
import { ExternalLinkIcon} from "@chakra-ui/icons";
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
<Box textAlign='center' padding='1% 0 1% 0' mt='2vw' boxShadow='0 0 1px black' fontWeight='bold' bg='black'>
    <Stack spacing={15}>
        <Text color='gray' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Proudly made in Nigeria by Adekunle Abdul-Azeez</Text>
        <Flex flexDirection='row' alignItems='space-evenly' justifyContent='center' m='0 auto'>
            <Box ><AiFillGithub cursor='pointer'/></Box>
            <Box><AiFillTwitterCircle cursor='pointer'/></Box>
            <Box><AiFillInstagram cursor='pointer'/></Box>
            <Box><AiFillMail cursor='pointer'/></Box>
        </Flex>
        <Link textDecoration='none' _hover={{textDecoration:'none', color:'#5885AF'}} color='#41729F' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons" isExternal>Curriculum icons created by Freepik - Flaticon<ExternalLinkIcon mx='2px' /></Link>
    </Stack>
</Box>
    )
}


export default Footer;