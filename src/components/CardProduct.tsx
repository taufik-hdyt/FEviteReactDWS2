import {
  Box,
  Card,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface IProps {
  tag?: string;
  name?: string;
  imageUrl?: string;
  price?: number;
  categories?: [];
  description?: string;
}
export default class CardProduct extends React.Component<IProps> {
  render() {
    const customStyleParagraf: React.CSSProperties = {
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };
    const customStyleTitle: React.CSSProperties = {
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    };

    const { name, description, imageUrl, tag, categories } = this.props;
    return (
      <Card pos="relative">
        <Image w="100%" h="150px" src={imageUrl} alt={name} roundedTop="lg" />
        <Stack spacing="3" p={3}>
          <Heading size="md" style={customStyleTitle}>
            {name}
          </Heading>
          <Text textAlign="justify" fontSize="sm" style={customStyleParagraf}>
            {description}
          </Text>
        </Stack>

        <Divider color="lightgray" />
        <CardFooter p={3} display="flex" gap={3}>
          {categories?.map((e) => (
            <Box px={3} rounded="lg" border="1px solid lightgray">
              {e}
            </Box>
          ))}
        </CardFooter>

        <Box
          pos="absolute"
          top="-2px"
          left="50%"
          transform="translate(-50%, -50%)"
          fontWeight="semibold"
          color="white"
          rounded="lg"
          px={2}
          bg={
            tag === 'NEW' ? 'green' : tag === 'FAVORITE' ? 'blue' : tag === 'FEATURED' ? 'purple': ''
          }
        >
          {tag}!!!
        </Box>
      </Card>
    );
  }
}
