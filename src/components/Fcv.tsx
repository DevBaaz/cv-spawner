import React from 'react';
import { useState } from 'react';
import TopHeader from "./TopHeader";
import { MdDriveFileRenameOutline, MdOutlineDateRange, MdWork } from 'react-icons/md';
import { IoMail, IoSchool } from 'react-icons/io5';
import { AiTwotonePhone } from 'react-icons/ai';
import { BiUserVoice } from 'react-icons/bi';
import { FaUserAlt, FaUserGraduate, FaUserCog, FaIndustry, FaUserClock, FaBusinessTime, FaUserPlus } from 'react-icons/fa';
import Footer from './Footer';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { Text, Heading , useTab, useMultiStyleConfig, Box, Stack, InputGroup, InputLeftAddon, InputRightElement, Input, Textarea, Link, Button, TabList, Tabs, TabPanel, TabPanels, Accordion, AccordionItem, AccordionButton,  AccordionPanel, AccordionIcon  } from "@chakra-ui/react";

type FcvObjPrototype = {name: string, tel:string, email: string, linkedIn: string, personalProfile: string, 
    kSA1: string, kSA1a: string, kSA1b?: string, kSA1c?: string, kSA1d?: string, kSA1e?: string,
    kSA2?: string, kSA2a?: string, kSA2b?: string, kSA2c?: string, kSA2d?: string, kSA2e?: string,
    kSA3?: string, kSA3a?: string, kSA3b?: string, kSA3c?: string, kSA3d?: string, kSA3e?: string,
    kSA4?: string, kSA4a?: string, kSA4b?: string, kSA4c?: string, kSA4d?: string, kSA4e?: string,
    kSA5?: string, kSA5a?: string, kSA5b?: string, kSA5c?: string, kSA5d?: string, kSA5e?: string,
    kSA6?: string, kSA6a?: string, kSA6b?: string, kSA6c?: string, kSA6d?: string, kSA6e?: string,
    kSA7?: string, kSA7a?: string, kSA7b?: string, kSA7c?: string, kSA7d?: string, kSA7e?: string,
    kSA8?: string, kSA8a?: string, kSA8b?: string, kSA8c?: string, kSA8d?: string, kSA8e?: string,
    eQ1Year: string, eQ1Qualification: string, eQ1School: string, eQ1Specialization?: string, eQ1Module1?: string, eQ1Module2?: string, eQ1Module3?: string, eQ1Module4?: string, eQ1Module5?: string,
    eQ2Year?: string, eQ2Qualification?: string, eQ2School?: string, eQ2Specialization?: string, eQ2Module1?: string, eQ2Module2?: string, eQ2Module3?: string, eQ2Module4?: string, eQ2Module5?: string,
    eQ3Year?: string, eQ3Qualification?: string, eQ3School?: string, eQ3Specialization?: string, eQ3Module1?: string, eQ3Module2?: string, eQ3Module3?: string, eQ3Module4?: string, eQ3Module5?: string,
    eQ4Year?: string, eQ4Qualification?: string, eQ4School?: string, eQ4Specialization?: string, eQ4Module1?: string, eQ4Module2?: string, eQ4Module3?: string, eQ4Module4?: string, eQ4Module5?: string,
    eQ5Year?: string, eQ5Qualification?: string, eQ5School?: string, eQ5Specialization?: string, eQ5Module1?: string, eQ5Module2?: string, eQ5Module3?: string, eQ5Module4?: string, eQ5Module5?: string,
    eQ6Year?: string, eQ6Qualification?: string, eQ6School?: string, eQ6Specialization?: string, eQ6Module1?: string, eQ6Module2?: string, eQ6Module3?: string, eQ6Module4?: string, eQ6Module5?: string,
    eQ7Year?: string, eQ7Qualification?: string, eQ7School?: string, eQ7Specialization?: string, eQ7Module1?: string, eQ7Module2?: string, eQ7Module3?: string, eQ7Module4?: string, eQ7Module5?: string,
    ex1Year?: string, ex1Position?: string, ex1Firm?: string, ex1Role1?: string, ex1Role2?: string, ex1Role3?: string, ex1Role4?: string, ex1Role5?: string,
    ex2Year?: string, ex2Position?: string, ex2Firm?: string, ex2Role1?: string, ex2Role2?: string, ex2Role3?: string, ex2Role4?: string, ex2Role5?: string,
    ex3Year?: string, ex3Position?: string, ex3Firm?: string, ex3Role1?: string, ex3Role2?: string, ex3Role3?: string, ex3Role4?: string, ex3Role5?: string,
    ex4Year?: string, ex4Position?: string, ex4Firm?: string, ex4Role1?: string, ex4Role2?: string, ex4Role3?: string, ex4Role4?: string, ex4Role5?: string,
    ex5Year?: string, ex5Position?: string, ex5Firm?: string, ex5Role1?: string, ex5Role2?: string, ex5Role3?: string, ex5Role4?: string, ex5Role5?: string,
    ex6Year?: string, ex6Position?: string, ex6Firm?: string, ex6Role1?: string, ex6Role2?: string, ex6Role3?: string, ex6Role4?: string, ex6Role5?: string,
    ex7Year?: string, ex7Position?: string, ex7Firm?: string, ex7Role1?: string, ex7Role2?: string, ex7Role3?: string, ex7Role4?: string, ex7Role5?: string,
    ex8Year?: string, ex8Position?: string, ex8Firm?: string, ex8Role1?: string, ex8Role2?: string, ex8Role3?: string, ex8Role4?: string, ex8Role5?: string,
    ex9Year?: string, ex9Position?: string, ex9Firm?: string, ex9Role1?: string, ex9Role2?: string, ex9Role3?: string, ex9Role4?: string, ex9Role5?: string,
    ex10Year?: string, ex10Position?: string, ex10Firm?: string, ex10Role1?: string, ex10Role2?: string, ex10Role3?: string, ex10Role4?: string, ex10Role5?: string,
    aI1?:string, aI2?:string, aI3?:string, aI4?:string, aI5?:string, aI6?:string, aI7?:string, aI8?:string, aI9?:string, aI10?:string 
}

// const fcvObj: FcvObjPrototype = {
//     name: '',
//     tel: '',
//     email: '',
//     linkedIn: '',
//     personalProfile: '',
//     kSA1: '',
//     kSA1a: '',
//     kSA1b: '',
//     kSA1c: '',
//     kSA1d: '',
//     kSA1e: '',
//     eQ1Year: '',
//     eQ1Qualification: '',
//     eQ1School: '',
//     ex1Year: '',
//     ex1Position: '',
//     ex1Firm: '',
//     ex1Role: '',
// };

const fcvObj: FcvObjPrototype = {
    name: 'ELIZABETH PAGE', tel: '07777991811', email: 'epage@profmail.com', linkedIn: 'www.linkedin.com/elizabeth-page',
    personalProfile: 'As a degree student specialising in psychology with The Open University, I am seeking a challenging and fulfilling post supporting disadvantaged young people. Having studiedalongside volunteering, I have a proven willingness to learn and an excellent work ethic. My enthusiasm, energy and adaptability has allowed me to work successfully as a volunteer with young people and build good working relationships. I particularly enjoy helping and motivating others to achieve their potential through education and employment. ',
    kSA1: 'Strong communication skills',
    kSA1a: 'A track record of engaging young people, with a sensitive but assertive approach, to support their personal development.',
    kSA1b: 'Assisting people with their practical needs and adapting to their specific challenges, through a patient-led approach.',
    kSA1c: 'Responsible for ensuring support sessions are not only fun but include learning development.',
    eQ1Year: '2020-Present', eQ1Qualification: 'Volunteer Care Assistant', eQ1School: `The Umbrella Children’s Home, Edinburgh`, eQ1Specialization: 'Psychology', 
    eQ1Module1: 'Childhood studies and child psychology', eQ1Module2: 'Investigating psychology', eQ1Module3: 'Counselling: exploring fear and sadness',
    ex1Year: '2020-Present', ex1Position: 'Volunteer Care Assistant', ex1Firm: 'The Umbrella Children’s Home, Edinburgh',
    ex1Role1: 'Supporting teenagers with additional needs in a residential children’s home.',  ex1Role2: 'Organising events and outings for the residents to support personal development.',
    aI1: 'Internal training as part of volunteer roles including safeguarding, care plan management, welfare systems and basic drug awareness',
    aI2: 'Computer literate, knowledge of Windows 10, Microsoft Office and IT databases'
};

const Fcv = () => {
    const [tabIndex, setTabIndex] = useState(0);
    
    const handleSliderChange = (event:any) => {
        setTabIndex(parseInt(event.target.value, 10))
    }
    
    const  handleTabsChange = (index:any) => {
        setTabIndex(index)
    }
    
    const CustomTab = React.forwardRef((props:any, ref:any) => {
        const tabProps = useTab({...props, ref})
    const isSelected = !!tabProps['aria-selected'] 
    const styles = useMultiStyleConfig('Tabs', tabProps)
    return (
        <Button __css={styles.tab} {...tabProps}>
            <Box as='span' mr='2'>{isSelected ? <ViewIcon /> : <ViewOffIcon />}</Box>{tabProps.children}
        </Button>
    )
    })
    
    const SubmitInput = (event: any) => {
        let id = event.target.id
        let inputDatavalue = document.getElementById(id) as HTMLElement;
        fcvObj[id as keyof typeof fcvObj] = (inputDatavalue as HTMLInputElement | HTMLTextAreaElement).value;
        const [input, setInput] = React.useState(localStorage.getItem(id));
        setInput((inputDatavalue as HTMLInputElement | HTMLTextAreaElement).value);
        React.useEffect(() => localStorage.setItem(id, input as string), [input, id]);
    }
    const KSA = (kSANumber: number) => {
        const number = `kSA${kSANumber}`, numberA = `kSA${kSANumber}a`, numberB = `kSA${kSANumber}b`, numberC = `kSA${kSANumber}c`, numberD = `kSA${kSANumber}d`, numberE = `kSA${kSANumber}e` 
        return(<> 
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='1vw auto' >
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Key Skills and Attribute ({kSANumber})</Heading></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Skill/Attribute:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. HTML/Strong communication skills' _placeholder={{ color: '#41729F' }} color='#41729F'required id={number} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdOutlineDateRange />}/>
            </InputGroup>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Description(s)</Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='2'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(1):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Well-versed in HTML./ A track record of engaging young people.' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberA} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(2):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Well-versed in HTML./ A track record of engaging young people' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberB} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(3):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Well-versed in HTML./ A track record of engaging young people' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberC} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(4):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Well-versed in HTML./ A track record of engaging young people' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberD} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(5):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Well-versed in HTML./ A track record of engaging young people' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberE} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
        </Stack>
        </AccordionPanel>
        </AccordionItem>
    </Accordion>
    </Box>
    </>)
}
    
    const EQ = (eqNumber: number):JSX.Element => {
        const numberYr = `eQ${eqNumber}Year`, numberQua = `eQ${eqNumber}Qualification`, numberSch = `eQ${eqNumber}School`, numberSpec = `kSA${eqNumber}SPecialization`,
         numberM1 = `kSA${eqNumber}Module1`, numberM2 = `kSA${eqNumber}Module2`, numberM3 = `kSA${eqNumber}Module3`, numberM4 = `kSA${eqNumber}Module4`,
         numberM5 = `kSA${eqNumber}Module5`
        return(
            <>
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='1vw auto'>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Education and Qualification({eqNumber})</Heading></Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
        <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Year:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. 2011-2014' _placeholder={{ color: '#41729F' }} color='#41729F'required id={numberYr} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdOutlineDateRange />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Qualification:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Masters in Accountancy (MBA),' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberQua} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserGraduate />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='School:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. The Open University' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberSch} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<IoSchool />}/>
            </InputGroup>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Specialization(s) and Module(s)</Box><AccordionIcon></AccordionIcon>
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='2'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon  fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='School:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberSpec} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<IoSchool />}/>
            </InputGroup>
            <InputGroup borderRadius='5px' id='add'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(1):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.  Investigating psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberM1} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
            </InputGroup>
            <InputGroup  borderRadius='5px' id='add'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(2):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.  Investigating psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberM2} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
            </InputGroup>
            <InputGroup borderRadius='5px' id='add'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(3):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.  Investigating psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberM3} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
            </InputGroup>
            <InputGroup borderRadius='5px' id='add'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(4):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.  Investigating psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberM4} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
            </InputGroup>
            <InputGroup borderRadius='5px' id='add'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(5):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.  Investigating psychology' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberM5} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
        </Stack>
            </AccordionPanel>
            </AccordionItem>
    </Accordion>
    </Box>
        </>)
    }



    const EX = (exNumber: number) => {
        const numberYr = `ex${exNumber}Year`, numberPos = `ex${exNumber}Position`, numberFirm = `ex${exNumber}Firm`, numberR1 = `eex${exNumber}Role1`, numberR2 = `ex${exNumber}Role2`,
        numberR3 = `ex${exNumber}Role3`, numberR4 = `ex${exNumber}Role4`, numberR5 = `ex${exNumber}Role5`
        return(<> 
        <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='1vw auto'>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Experience({exNumber})</Heading></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Year:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. 2014-Present' _placeholder={{ color: '#41729F' }} color='#41729F'required id={numberYr} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdOutlineDateRange />}/>
            </InputGroup>
            <InputGroup  borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Position:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Volunteer Care Assistant' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberPos} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdWork />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Firm:'/>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. The Umbrella Children’s Home, Edinburgh' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberFirm} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaIndustry />}/>
            </InputGroup>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Role(s)</Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='2'>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(1):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR1} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(2):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR2} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(3):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR3} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(4):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR4} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(5):'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR5} onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
        </Stack>
        </AccordionPanel>
        </AccordionItem>
    </Accordion>
    </Box>
    </>)

}

const AI = () => {
    return(
        <>
        <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto' >
        <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }} textAlign='center' pb={5}>Additional Information(s)</Heading>
        <Accordion allowToggle>
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(1)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI1' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(2)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI2' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(3)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI3' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(4)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI4' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(5)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI5' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(6)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI6' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(7)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI7' onBlur={SubmitInput}/>
        <InputRightElement children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(8)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI8' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(9)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI9' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>        
        <AccordionItem>
        <AccordionButton>
        <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Information(10)</Text></Box><AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={2}>
        <Stack spacing='15'>
        <InputGroup borderRadius='5px'>
        <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='Extensive knowledge of,and interest in, sport' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aI10' onBlur={SubmitInput}/>
        <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
        </InputGroup>
        </Stack>
        </AccordionPanel>
        </AccordionItem>
        </Accordion>
        <Stack spacing='15'>
        <Button fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} colorScheme='gray'><Link textDecoration='none' _hover={{ textDecoration:'none' }} color='#41729F' fontWeight='bold' href='./TcvEngine'><NavLink to='/fcvEngine'>Submit All</NavLink></Link></Button>
        </Stack>
        </Box>
        </>
)
}

return (
    <Box bg='#e9edf6'>
    <TopHeader/>
    <Box padding='2%' w={{base:'90%', lg:'80%'}} m='2vw auto' borderRadius='10px' boxShadow='0 0 2px #41729F' color='gray' fontWeight='bold' textAlign='center' bg='black'>
        <Stack spacing='15'>
        <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Let Us Walk You Through The Steps...</Heading>
        <input type='range' min='0' max='5' value={tabIndex} onChange={handleSliderChange} />
        <Tabs isFitted index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>CD →</CustomTab>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>PP →</CustomTab>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>KS&A →</CustomTab>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>E&Q →</CustomTab>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>E →</CustomTab>
            <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>AI ↓</CustomTab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto'>
        <Stack spacing='15'>
            <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }} textAlign='center'>Contact Details</Heading>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Name:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. ELIZABETH PAGE' _placeholder={{ color: '#41729F' }} color='#41729F'required id='name' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdDriveFileRenameOutline />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Phone Number:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='tel' placeholder='e.g. 09012345678'_placeholder={{ color: '#41729F' }} color='#41729F' required id='tel' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<AiTwotonePhone />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='E-mail:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='email' placeholder='e.g. epage@profmail.com' _placeholder={{ color: '#41729F' }} color='#41729F' required id='email' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<IoMail />}/>
            </InputGroup>
            <InputGroup borderRadius='5px'>
            <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='LinkedIn:'/> 
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='url' placeholder='e.g. www.linkedin.com/elizabeth-page'_placeholder={{ color: '#41729F' }} color='#41729F' required id='linkedIn' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserAlt />}/>
            </InputGroup>
        </Stack>
    </Box>
            </TabPanel>
            <TabPanel>
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto'>
        <Stack spacing='15'>
            <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }} textAlign='center'>Personal Profile</Heading>
            <InputGroup borderRadius='10px'>
            <Textarea fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} placeholder='NOTE: Profile summarises how candidate’s career aims align with the job she is applying for.'_placeholder={{ color: '#41729F' }} color='#41729F' cols={50} rows={15} required id='personalProfile' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<BiUserVoice />}/>
            </InputGroup>
        </Stack>
    </Box>
            </TabPanel>
            <TabPanel>
            {KSA(1)}
            {KSA(2)}
            {KSA(3)}
            {KSA(4)}
            {KSA(5)}
            {KSA(6)}
            {KSA(7)}
            {KSA(8)}
            </TabPanel>
            <TabPanel>
            {EQ(1)}
            {EQ(2)}
            {EQ(3)}
            {EQ(4)}
            {EQ(5)}
            {EQ(6)}
            {EQ(7)}
            </TabPanel>
            <TabPanel>
            {EX(1)}
            {EX(2)}
            {EX(3)}
            {EX(4)}
            {EX(5)}
            {EX(6)}
            </TabPanel>
            <TabPanel>
            {AI()}
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Stack> 
      </Box>
    <Footer />
</Box>
)
}


// const Fcv = () => {
//     return (
//         <>
//         <Button colorScheme='gray'><Link textDecoration='none' _hover={{ textDecoration:'none' }} color='#41729F' fontWeight='bold' href='./FcvEngine'><NavLink to='/fcvEngine'>Submit All</NavLink></Link></Button>
//         </>
//     )
// }

export default Fcv;
export {fcvObj, FcvObjPrototype}