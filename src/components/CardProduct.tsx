import {   Box, Card, CardFooter, Divider,  Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default class CardProduct extends React.Component {
  render() {
    const customStyleParagraf: React.CSSProperties = {
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
    const customStyleTitle: React.CSSProperties ={
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }
    return (
      <Card maxW='250px' pos='relative'>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          roundedTop='lg'
        />
        <Stack spacing='3' p={3}>
          <Heading size='md' style={customStyleTitle}>Living room Sofa</Heading>
          <Text textAlign='justify' fontSize='sm' style={customStyleParagraf}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
        </Stack>

      <Divider color='lightgray' />
      <CardFooter p={3} display='flex' gap={3}>
        <Box px={3} rounded='lg' border='1px solid lightgray'>Cocolate</Box>
        <Box px={3} rounded='lg' border='1px solid lightgray'>cake</Box>
      </CardFooter>

      <Text pos='absolute' top='-2px' left='50%'  transform="translate(-50%, -50%)" fontWeight='semibold' color='white' rounded='lg' px={2} bg='green'>NEW!!!</Text>
    </Card>
    );
  }
}
