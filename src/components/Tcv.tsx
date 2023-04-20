import React from 'react';
import { useState } from 'react';
import { MdDriveFileRenameOutline, MdOutlineDateRange, MdWork } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';
import { IoMail, IoSchool } from 'react-icons/io5';
import { BiUserVoice } from 'react-icons/bi';
import { FaUserAlt, FaUserGraduate, FaUserCog, FaIndustry, FaUserClock, FaBusinessTime, FaUserPlus } from 'react-icons/fa';
import { Text, Heading , useTab, useMultiStyleConfig, Box, Stack, InputGroup, InputLeftAddon, InputRightElement, Input, Textarea, Link, Button, TabList, Tabs, TabPanel, TabPanels, Accordion, AccordionItem, AccordionButton,  AccordionPanel, AccordionIcon  } from "@chakra-ui/react";
import TopHeader from "./TopHeader";
import Footer from './Footer';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

type TcvObjPrototype = { name:string, tel:string, email: string, linkedIn: string, website?: string, personalProfile: string, 
    pQ1Year?:string, pQ1Qualification?:string, pQ1School?:string,  pQ1SpecializationA?: string, pQ1SpecializationB?: string,pQ1SpecializationC?: string,pQ1SpecializationD?: string,pQ1SpecializationE?: string, 
    pQ2Year?:string, pQ2Qualification?:string, pQ2School?:string, pQ2SpecializationA?: string, pQ2SpecializationB?: string,pQ2SpecializationC?: string,pQ2SpecializationD?: string,pQ2SpecializationE?: string, 
    pQ3Year?:string, pQ3Qualification?:string, pQ3School?:string, pQ3SpecializationA?: string, pQ3SpecializationB?: string,pQ3SpecializationC?: string,pQ3SpecializationD?: string,pQ3SpecializationE?: string,
    pQ4Year?:string, pQ4Qualification?:string, pQ4School?:string, pQ4SpecializationA?: string, pQ4SpecializationB?: string,pQ4SpecializationC?: string,pQ4SpecializationD?: string,pQ4SpecializationE?: string,
    pQ5Year?:string, pQ5Qualification?:string, pQ5School?:string, pQ5SpecializationA?: string, pQ5SpecializationB?: string,pQ5SpecializationC?: string,pQ5SpecializationD?: string,pQ5SpecializationE?: string,
    pQ6Year?:string, pQ6Qualification?:string, pQ6School?:string, pQ6SpecializationA?: string, pQ6SpecializationB?: string,pQ6SpecializationC?: string,pQ6SpecializationD?: string,pQ6SpecializationE?: string,
    cH1Date?:string, cH1Position?:string, cH1Firm?:string, cH1RoleA?:string, cH1RoleB?:string, cH1RoleC?:string, cH1RoleD?:string, cH1RoleE?:string, cH1RoleF?:string, cH1RoleG?:string, cH1RoleH?:string, cHBrief: string,
    cH2Date?:string, cH2Position?:string, cH2Firm?:string, cH2RoleA?:string, cH2RoleB?:string, cH2RoleC?:string, cH2RoleD?:string, cH2RoleE?:string, cH2RoleF?:string, cH2RoleG?:string, cH2RoleH?:string,
    cH3Date?:string, cH3Position?:string, cH3Firm?:string, cH3RoleA?:string, cH3RoleB?:string, cH3RoleC?:string, cH3RoleD?:string, cH3RoleE?:string, cH3RoleF?:string, cH3RoleG?:string, cH3RoleH?:string,
    cH4Date?:string, cH4Position?:string, cH4Firm?:string, cH4RoleA?:string, cH4RoleB?:string, cH4RoleC?:string, cH4RoleD?:string, cH4RoleE?:string, cH4RoleF?:string, cH4RoleG?:string, cH4RoleH?:string,
    cH5Date?:string, cH5Position?:string, cH5Firm?:string, cH5RoleA?:string, cH5RoleB?:string, cH5RoleC?:string, cH5RoleD?:string, cH5RoleE?:string, cH5RoleF?:string, cH5RoleG?:string, cH5RoleH?:string,
    cH6Date?:string, cH6Position?:string, cH6Firm?:string, cH6RoleA?:string, cH6RoleB?:string, cH6RoleC?:string, cH6RoleD?:string, cH6RoleE?:string, cH6RoleF?:string, cH6RoleG?:string, cH6RoleH?:string,
    aS1?:string, aS2?:string, aS3?:string, aS4?:string, aS5?:string, aS6?:string, aS7?:string, aS8?:string, aS9?:string, aS10?:string }
    
// const tcvObj: TcvObjPrototype = {name: '', tel: '', email: '', linkedIn: '', personalProfile: '', pQ1Year: '', pQ1Qualification: '', pQ1School: '', pQ1Specialization: '',
//  cH1Date: '', cH1Position: '', cH1Firm: '', cH1Role: '', cHBrief: '', aS1: ''};
    const tcvObj: TcvObjPrototype = { name: 'Daniel Rossi', tel: '01234 12345', email: 'd.rossi@smartmail.com', linkedIn: 'https://linkedin.com/in/daniel-rossi/', personalProfile: 'A highly motivated CIMA professional with in-depth knowledge of financial and management information systems. Key strengths include commercial and business awareness, strategic analysis, analytical thinking and a logical approach to work',  
        pQ1Year: '2015-2018', pQ1Qualification: 'Masters in Business Administration (MBA),', pQ1School:'The Open University', pQ1SpecializationA: 'Managing performance and change',
        cH1Date: '2014-Present', cH1Position: 'Deputy Finance Manager', cH1Firm: 'Ace Holdings, Portsmouth', cH1RoleA: 'Planned and co-ordinated computerisation of the management accounts system, which required high-level organisational skills and the ability to think strategically to deal with complex challenges as the project progressed.',
        cHBrief: 'Career started as a Trainee Accounts Clerk with S Finance, learning the job and assisting with ledger accounts. Quickly promoted to Accounts Clerk and began working towards professional qualifications.',aS1: 'IT skills: use Microsoft Office and SAGE financial management software on a daily basis to write documents, prepare presentations, store and manipulate data and produce financial reports.' }
    
    
    const Tcv = () => {
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
            tcvObj[id as keyof typeof tcvObj] = (inputDatavalue as HTMLInputElement | HTMLTextAreaElement).value;
            const [input, setInput] = React.useState(localStorage.getItem(id));
            setInput((inputDatavalue as HTMLInputElement | HTMLTextAreaElement).value);
            React.useEffect(() => localStorage.setItem(id, input as string), [input, id]);
        }

        const PQ = (pqNumber: number):JSX.Element => {
            const numberYr = `pQ${pqNumber}Year`, numberQua = `pQ${pqNumber}Qualification`, numberSch = `pQ${pqNumber}School`, numberS1 = `pQ${pqNumber}SpecializationA`, numberS2 = `pQ${pqNumber}SpecializationB`,
            numberS3 = `pQ${pqNumber}SpecializationC`, numberS4 = `pQ${pqNumber}SpecializationD`, numberS5 = `pQ${pqNumber}SpecializationE`
            return(
            <>
                <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='1vw auto'>
                <Accordion allowToggle>
                <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'><Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Personal Qualification({pqNumber})</Heading></Box>
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
                <Input type='text' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} placeholder='e.g. The Open University' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberSch} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<IoSchool />}/>
                </InputGroup>
                <Accordion allowToggle>
                <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>Specialization(s)</Box><AccordionIcon></AccordionIcon>
                </AccordionButton>
                <AccordionPanel pb={2}>
                <Stack spacing='2'>
                <InputGroup borderRadius='5px' id='add'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(1):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.Financial strategy' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberS1} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
                </InputGroup>
                <InputGroup borderRadius='5px' id='add'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(2):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.Financial strategy' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberS2} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
                </InputGroup>
                <InputGroup borderRadius='5px' id='add'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(3):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.Financial strategy' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberS3} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
                </InputGroup>
                <InputGroup borderRadius='5px' id='add'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(4):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.Financial strategy' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberS4} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserCog />}/>
                </InputGroup>
                <InputGroup borderRadius='5px' id='add'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Specialization(5):'/> 
                <Input  fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g.Financial strategy' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberS5} onBlur={SubmitInput}/>
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

        const CH = (chNumber: number) => {
            const numberYr = `cH${chNumber}Year`, numberPos = `cH${chNumber}Position`, numberFirm = `cH${chNumber}Firm`, numberR1 = `cH${chNumber}RoleA`, numberR2 = `cH${chNumber}RoleB`,
            numberR3 = `cH${chNumber}RoleC`, numberR4 = `cH${chNumber}RoleD`, numberR5 = `cH${chNumber}RoleE`, numberR6 = `cH${chNumber}RoleF`, numberR7 = `cH${chNumber}RoleG`, numberR8 = `cH${chNumber}RoleH`
            return(<> 
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='1vw auto' >
                <Accordion allowToggle>
                <AccordionItem>
                <AccordionButton>
                <Box as="span" flex='1' textAlign='left'><Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Career History({chNumber})</Heading></Box><AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <Stack spacing='15'>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Year:'/>
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. 2011-2014' _placeholder={{ color: '#41729F' }} color='#41729F'required id={numberYr} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdOutlineDateRange />}/>
                </InputGroup>
                <InputGroup  borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Position:'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Deputy Finance Manager' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberPos} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdWork />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Firm:'/>
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Ace Holdings, Portsmouth' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberFirm} onBlur={SubmitInput}/>
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
                <Input  fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR3} onBlur={SubmitInput}/>
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
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(6):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR6} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(7):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR7} onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserClock />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Role(8):'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Interviewed clients' _placeholder={{ color: '#41729F' }} color='#41729F' required id={numberR8} onBlur={SubmitInput}/>
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

    const AS = () => {
        return(
            <>
            <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto' >
            <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }} textAlign='center' pb={5}>Additional Skill(s) and Experience(s)</Heading>
            <Accordion allowToggle>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(1)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS1' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(2)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS2' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(3)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS3' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(4)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS4' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(5)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS5' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(6)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS6' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(7)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS7' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(8)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input  fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS8' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(9)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS9' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>        
            <AccordionItem>
            <AccordionButton>
            <Box as="span" flex='1' textAlign='left'><Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} fontWeight='bold'>Additional Skill and Experience(10)</Text></Box><AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
            <Stack spacing='15'>
            <InputGroup borderRadius='5px'>
            <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='NOTE: This section highlights the employability skills developed through study, work and even leisure interests. ' _placeholder={{ color: '#41729F' }} color='#41729F' required id='aS10' onBlur={SubmitInput}/>
            <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaUserPlus />}/>
            </InputGroup>
            </Stack>
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <Stack spacing='15'>
            <Button fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} colorScheme='gray'><Link textDecoration='none' _hover={{ textDecoration:'none' }} color='#41729F' fontWeight='bold' href='./TcvEngine'><NavLink to='/tcvEngine'>Submit All</NavLink></Link></Button>
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
            <Tabs isFitted index={tabIndex} onChange={handleTabsChange} >
              <TabList m='0 auto'>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>CD →</CustomTab>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>PP →</CustomTab>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>PQ →</CustomTab>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>CH →</CustomTab>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>CB →</CustomTab>
                <CustomTab m='0 auto' fontWeight='bold' fontSize={{ base:'35%', sm: '75%', md:'90%', lg:'100%' }}>AS&E ↓</CustomTab>
              </TabList>
              <TabPanels>
                <TabPanel>
                <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto'>
            <Stack spacing='15'>
                <Heading textAlign='center' fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }}>Contact Details</Heading>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon children='Name:' fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='text' placeholder='e.g. Daniel Rossi' _placeholder={{ color: '#41729F' }} color='#41729F'required id='name' onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<MdDriveFileRenameOutline />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='Phone Number:'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='tel' placeholder='e.g. 09012345678'_placeholder={{ color: '#41729F' }} color='#41729F' required id='tel' onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<AiTwotonePhone />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='E-mail:'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='email' placeholder='e.g. d.rossi@smartmail.com' _placeholder={{ color: '#41729F' }} color='#41729F' required id='email' onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<IoMail />}/>
                </InputGroup>
                <InputGroup borderRadius='5px'>
                <InputLeftAddon fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children='LinkedIn:'/> 
                <Input fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} type='url' placeholder='e.g. https://linkedin.com/in/daniel-rossi/'_placeholder={{ color: '#41729F' }} color='#41729F' required id='linkedIn' onBlur={SubmitInput}/>
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
                <Textarea fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} placeholder='NOTE: Profile summarises career aims in a way that is tailored to the job application.'_placeholder={{ color: '#41729F' }} color='#41729F' cols={50} rows={15} required id='personalProfile' onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<BiUserVoice />}/>
                </InputGroup>
            </Stack>
        </Box>
                </TabPanel>
                <TabPanel>
                {PQ(1)}
                {PQ(2)}
                {PQ(3)}
                {PQ(4)}
                {PQ(5)}
                {PQ(6)}
                </TabPanel>
                <TabPanel>
                {CH(1)}
                {CH(2)}
                {CH(3)}
                {CH(4)}
                {CH(5)}
                {CH(6)}
                </TabPanel>
                <TabPanel>
                <Box w={{base:'100%', lg:'80%'}} p={{base:'0%', lg:'2%'}} borderRadius='10px' boxShadow={{base:'', lg:'0 0 2px #41729F'}} m='5vw auto'>
            <Stack spacing='15'>
                <Heading fontSize={{ base:'120%', sm: '150%', md:'170%', lg:'200%' }} textAlign='center'>Career Brief</Heading>
                <InputGroup borderRadius='10px'>
                <Textarea fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} placeholder='NOTE: This entry briefly summarises previous employment history that is less relevant.' _placeholder={{ color: '#41729F' }} color='#41729F' cols={50} rows={15} required id='cHBrief' onBlur={SubmitInput}/>
                <InputRightElement fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} children={<FaBusinessTime />}/>
                </InputGroup>
            </Stack>
        </Box>
                </TabPanel>
                <TabPanel>
                {AS()}
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Stack> 
          </Box>
        <Footer />
    </Box>
    )
}


export default Tcv;
export {tcvObj, TcvObjPrototype}