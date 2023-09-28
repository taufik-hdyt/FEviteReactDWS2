import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";

export default class Home extends React.Component {
  render() {
    return (
      <Grid gridTemplateColumns={{ base: "1fr", md: "350px 1fr" }} gap={4}>
        <Sidebar />
        <GridItem>
          <Header />
          <Grid
          p={6}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={4}
            rowGap={6}
          >
            <CardProduct />
            <CardProduct />
          </Grid>
        </GridItem>
      </Grid>
    );
  }
}
