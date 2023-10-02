import {
  Box,
  Flex,
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
import { AiFillTag } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

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
  data?: IData;
}
export default class ModalDetailProduct extends React.Component<IProps> {
  render() {
    const { isOpen, onClose, data } = this.props;
    return (
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={4}>

              <Image
                w="500px"
                h="300px"
                src={data?.imageUrl}
                alt={data?.name}
              />

            <Stack mt={4}>
              <Heading fontSize="lg">{data?.name}</Heading>
              <Text>{data?.description}</Text>

              <HStack>
                <Flex align="center" gap={4}>
                  <BiSolidCategoryAlt size={20} />
                  <Text fontWeight="bold">Category : </Text>
                </Flex>
                {data?.categories.map((e) => (
                  <Box
                    key={e}
                    w="fit-content"
                    px={3}
                    rounded="lg"
                    border="1px solid lightgray"
                  >
                    {e}
                  </Box>
                ))}
              </HStack>
              <Flex align="center" gap={4}>
                <AiFillTag size={20} />
                <Flex
                  gap={2}
                  fontWeight="bold"
                  align="center"
                >
                  Tag :<Box   bg={
                    data?.tag === "NEW"
                      ? "green"
                      : data?.tag === "FAVORITE"
                      ? "blue"
                      : data?.tag === "FEATURED"
                      ? "purple"
                      : ""
                  }
                  color='white'
                  px={3}
                  rounded='lg'
                  fontWeight='semibold'
                  >{data?.tag}!!!</Box>
                </Flex>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
