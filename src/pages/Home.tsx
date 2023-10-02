import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import axiosInstance from "../lib/axios";
import ModalDetailProduct from "../components/ModalDetailProduct";

interface IData {
  id: number;
  tag: string;
  name: string;
  imageUrl: string;
  price: number;
  categories: [];
  description: string;
}

interface State{
  data: IData[]
  isOpen: boolean
  selected: IData
}
export default class Home extends React.Component<{value?: null},State> {
  constructor(props: {value?: null}){
    super(props)
    this.state ={
      isOpen: false,
      data: [],
      selected: {
        id: 0,
        categories: [],
        description:'',
        imageUrl:'',
        name: '',
        price: 0,
        tag: ''
      }
    }
  }


  openModalProduct( d: IData){
    this.setState({
      isOpen: true,
      selected: d
    })
  }
  onClose(){
    this.setState({
      isOpen: false,
    })
  }

  async getData() {
    try {
        const response = await axiosInstance.get('/')
        this.setState({
          data: response.data,

        });
    } catch (error) {
      console.log(error);
    }
  }


  componentDidMount(): void {
    this.getData()
  }


  render() {
    const { data,selected,isOpen } = this.state
    return (
      <Grid gridTemplateColumns={{ base: "1fr",lg: "350px 1fr" }} gap={4}>
        <Sidebar />
        <GridItem>
          <Header />
          <Grid
            p={6}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            justifyItems="center"
            gap={4}
            rowGap={6}
            overflowY="auto"
            maxH="100vh"
          >

            {data?.map((e: IData) => (
              <CardProduct
                categories={e.categories}
                imageUrl={e.imageUrl}
                name={e.name}
                description={e.description}
                tag={e.tag}
                key={e.id}
                onOpenModal={()=>this.openModalProduct(e)}
              />
            ))}
          </Grid>
        </GridItem>
        {
          isOpen &&
          <ModalDetailProduct data={selected}  isOpen={this.state.isOpen} onClose={()=> this.onClose()} />
        }

      </Grid>
    );
  }
}
