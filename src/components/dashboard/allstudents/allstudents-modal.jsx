import { Button, Center, Flex, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function AllStudentsModal({ isOpen, onOpen, onClose }) {

    const [value, onChange] = useState(() => new Date());
    
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose()
        console.log(title, note)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
            <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent maxW="52rem">
                <ModalHeader></ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                    <Flex justifyContent='space-between' gap='5'>

                        <Flex flexDir='column' flexGrow='1'>
                            <Text paddingY='0.1rem' fontWeight='bold' fontSize='1.5rem' color='primary'>Thursday</Text>
                            <Text paddingBottom='0rem' fontSize='sm'>10 August</Text>

                            <Input marginY='0.4rem' width='100%' placeholder='Title/Purpose' value={title} onChange={e => setTitle(e.target.value)} />
                            <Textarea marginY='0.4rem' height='7.2rem' placeholder='Write a note...' value={note} onChange={e => setNote(e.target.value)} />
                            <Button type='submit' bg='blackAlpha.800' color='white' _hover={{ bg: 'blackAlpha.800'}} fontSize='1.2rem' marginTop='1.2rem'>Save</Button>
                        </Flex>
                    </Flex>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button bg='green' color='white' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent> 
        </Modal>
    )
}