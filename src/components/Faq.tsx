import { Box, Text, Heading, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, } from '@chakra-ui/react';
import Footer from './Footer';
import TopHeader from './TopHeader';

const Faq = () => {
    const sh: number = window.innerHeight
    return (
        <Box bg='#e9edf6'>  
        <TopHeader />
        <Box h={sh}>
        <Box w='80%' padding='2%' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' bg='black' m='5vw auto'>
        <Heading color='gray' textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>FAQ</Heading>
        <Accordion allowMultiple defaultIndex={[0]} fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>
            <AccordionItem padding='2% 0 5% 0'>
                <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' fontWeight='bold' fontSize='105%' color='#41729F'>Is this app free?</Text>
                        <Image src='AccordionCircleIcon.svg' alt='Acccordion Circle Icon' />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} margin='2% 0 -2% 0' fontSize='105%'>Yes.</AccordionPanel>
            </AccordionItem>
            <AccordionItem padding='2% 0 5% 0'>
                <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' fontWeight='bold' fontSize='105%' color='#41729F'>Can i retrieve my information incase of e mistake?</Text>
                        <Image src='AccordionCircleIcon.svg' alt='Acccordion Circle Icon' />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} margin='2% 0 -2% 0' fontSize='105%'>Of course..</AccordionPanel>
            </AccordionItem>
            <AccordionItem padding='2% 0 5% 0'>
                <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' fontWeight='bold' fontSize='105%' color='#41729F'>Is my information safe?</Text>
                        <Image src='AccordionCircleIcon.svg' alt='Acccordion Circle Icon' />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} margin='2% 0 -2% 0' fontSize='105%'>Yes.</AccordionPanel>
            </AccordionItem>
            <AccordionItem padding='2% 0 5% 0'>
                <h2>
                    <AccordionButton>
                        <Text flex='1' textAlign='left' fontWeight='bold' fontSize='105%' color='#41729F'>How long do i have to wait for my CV?</Text>
                        <Image src='AccordionCircleIcon.svg' alt='Acccordion Circle Icon' />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} margin='2% 0 -2% 0' fontSize='105%'>Instantly.</AccordionPanel>
            </AccordionItem>
        </Accordion>
        </Box>
        </Box>
        <Footer />
        </Box>
    )
}

export default Faq;