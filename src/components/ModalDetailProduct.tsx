import {
  Box,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";


interface IData {
  id: number;
  tag: string;
  name: string;
  imageUrl: string;
  price: number;
  categories: [];
  description: string;
}
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  data?: IData
}
export default class ModalDetailProduct extends React.Component<IProps> {
  render() {
    const { isOpen, onClose,data } = this.props;
    return (
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={4}>
            <Box pos="relative">
              <Image
                w="500px"
                h='300px'
                src={
                data?.imageUrl
                }
                alt={data?.name}
              />
              <Box
                pos="absolute"
                top="-2px"
                left="50%"
                transform="translate(-50%, -50%)"
                fontWeight="semibold"
                color="white"
                rounded="lg"
                px={2}
                bg="purple"
              >
                {data?.tag}
              </Box>
            </Box>
            <Stack mt={4}>
              <Heading fontSize='lg'>{data?.name}</Heading>
              <Text>
                {
                  data?.description
                }
              </Text>

              <HStack>

              {
                data?.categories.map((e)=> (
              <Box
              key={e}
                w="fit-content"
                px={3}
                rounded="lg"
                border="1px solid lightgray"
              >
                {e}
              </Box>
                ))
              }
              </HStack>

            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
