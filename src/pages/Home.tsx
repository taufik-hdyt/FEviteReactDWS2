import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import axios from "axios";

interface IData {
  id: number
  tag: string
  name: string
  imageUrl: string
  price: number
  categories: []
  description: string
}
export default class Home extends React.Component {
  state={
    data: []
  }
  async getData() {
    try {
      const response = await axios.get("https://api.npoint.io/78a92c825eb26f0a6cd6");
      this.setState({
        data: response.data
      })
    } catch (error) {
      console.log(error);

    }
  }


  componentDidMount(): void {
    this.getData()
  }
  render() {
    const {data}= this.state


    return (
      <Grid gridTemplateColumns={{ base: "1fr", md: "350px 1fr" }} gap={4}>
        <Sidebar />
        <GridItem>
          <Header />
          <Grid
            p={6}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            justifyItems="center"
            gap={4}
            rowGap={6}
            overflowY='auto'
            maxH='100vh'
          >
            {
              data.map((e:IData)=> (
                <CardProduct categories={e.categories} imageUrl={e.imageUrl}name={e.name} description={e.description} tag={e.tag} key={e.id} />
              ))
            }
          </Grid>
        </GridItem>
      </Grid>
    );
  }
}
