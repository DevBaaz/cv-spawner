import React from 'react';
import { Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Text  } from '@chakra-ui/react';

type src = {modalPage: string, modalTitle:string, imageSrc:string}

const CvModal = ({ modalPage, modalTitle, imageSrc }:src) => {  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const btnRef = React.useRef(null)
    return (
      <>
        <Button mt={3} ref={btnRef} onClick={onOpen} colorScheme='gray' color='#41729F'> 
          <Text fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }}>{modalPage}</Text>
        </Button>
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior='outside'
          size='3xl'
        >
          <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
          <ModalContent>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={imageSrc} h={{md:'1000px'}} w={{md:'750px'}} alt='cv' overflow='scroll' />
            </ModalBody>
            <ModalFooter>
              <Button fontSize={{ base:'55%', sm: '75%', md:'90%', lg:'100%' }} onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CvModal;