import { Image, Container, Text } from "@chakra-ui/react";
import React from "react";
let Logo = require("../Assets/loader.gif");

const Loader = () => {
  return (
    <Container
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
      minH={"180vh"}
    >
      <Image src={Logo} />
      <Text color={"blackAlpha.900"} fontSize={"4xl"}>
        Loading...
      </Text>
    </Container>
  );
};

export default Loader;
