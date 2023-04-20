import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Box, Drawer,DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Stack} from "@chakra-ui/react";
import { BsMenuUp } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const TopHeader = () => {

  const NavDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Heading _hover={{textDecoration:'none', color:'#C3E0E5'}} color='#41729F' cursor='pointer' onClick={onOpen} fontSize={{ base:'70%', sm: '100%', md:'120%', lg:'200%' }}><BsMenuUp /></Heading>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader> 
            <DrawerBody>
            <Box display='flex' flexDirection='column'>
              <Stack spacing='15px'>
              <Box>
            <Breadcrumb separator=''>
            <BreadcrumbItem>
            <BreadcrumbLink href='./About' _hover={{textDecoration:'none', color:'#5885AF'}} fontWeight='bold' color='#41729F' borderRadius='5px' cursor='pointer' fontSize={{ base:'35%', sm: '55%', md:'70%', lg:'100%' }}><NavLink to='/about'/>About</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
              </Box>
              <Box>
            <Breadcrumb separator=''>
            <BreadcrumbItem>
            <BreadcrumbLink href='./MoT' _hover={{textDecoration:'none', color:'#5885AF'}} fontWeight='bold' color='#41729F' borderRadius='5px' cursor='pointer' fontSize={{ base:'35%', sm: '55%', md:'70%', lg:'100%' }}><NavLink to='/mot'/>More on Traditional CV</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
              </Box>
              <Box>
            <Breadcrumb separator=''>
            <BreadcrumbItem>
            <BreadcrumbLink href='./MoF' _hover={{textDecoration:'none', color:'#5885AF'}} fontWeight='bold' color='#41729F' borderRadius='5px' cursor='pointer' fontSize={{ base:'35%', sm: '55%', md:'70%', lg:'100%' }}><NavLink to='/mof'/>More on Funtional CV</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
              </Box>
              <Box>
            <Breadcrumb separator=''>
            <BreadcrumbItem>
            <BreadcrumbLink href='./Faq' _hover={{textDecoration:'none', color:'#5885AF'}} fontWeight='bold' color='#41729F'  borderRadius='5px' cursor='pointer' fontSize={{ base:'35%', sm: '55%', md:'70%', lg:'100%' }}><NavLink to='/faq'/>FAQ</BreadcrumbLink>
            </BreadcrumbItem>
            </Breadcrumb>
              </Box>
              </Stack>
            </Box>
            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>Cancel</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

    return (
  <Box display='flex' justifyContent='space-between' alignItems='center' boxShadow='0 0 1px black' bg='black' p={'1.4%'}>
    <Box>
<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='./Home' _hover={{textDecoration:'none', color:'#C3E0E5'}} cursor='pointer' borderRadius='10px'><NavLink to='/'/><Heading as='h1' fontSize={{ base:'70%', sm: '100%', md:'120%', lg:'200%' }} color='#41729F'><NavLink to='/home'/>CV-Spawner</Heading></BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    </Box>
    <Box>
      {NavDrawer()}
    </Box>
  </Box>
    )
}

export default TopHeader;