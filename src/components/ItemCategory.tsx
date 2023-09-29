import {Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

export default class ItemCategory extends React.Component {
  render() {
    return (
      <Stack pl={14} py={2} spacing={1} color="white" fontWeight="bold">
        <Checkbox
          // onChange={() => {
          //   this.onSelect("Chocolate");
          // }}
          value="Chocolate"
        >
          Chocolate
        </Checkbox>
        <Checkbox

          // onChange={() => {
          //   this.onSelect("Cake");
          // }}
          value="Cake"
        >
          Cake
        </Checkbox>
        <Checkbox
          // onChange={() => {
          //   this.onSelect("Bread");
          // }}
          value="Bread"
        >
          Bread
        </Checkbox>
      </Stack>
    );
  }
}
