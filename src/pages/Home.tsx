
import {  Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

export default class Home extends React.Component{
render(){
  return (
    <Grid gridTemplateColumns={{base: '1fr', md: '300px 1fr'}}>
        <Sidebar />

      <GridItem>product</GridItem>
    </Grid>
  )
}
}