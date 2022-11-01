import React from 'react';
import {
   Flex,
   Box,
   Heading,
   FormControl,
   FormLabel,
   Input,
   Button
} from '@chakra-ui/react'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
 const Login = () => {
  const [setEmail] = useState("");
  const [setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = event => {
    event.preventDefault();
    navigate("/HomePage");

  }


  return (


    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login Page</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired >
              <FormLabel>Email :</FormLabel>
              <Input type="email"
                placeholder="put your email"
                size="md"
                onChange={event => setEmail(event.currentTarget.value)} />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password :</FormLabel>
              <Input
                type="password"
                placeholder="**********"
                size="md"
                onChange={event => setPassword(event.currentTarget.value)} />
            </FormControl>



            <Button variantColor="teal"
              variant="outline"
              type="submit"
              width="full"

              mt={4}
              onSubmit={handleSubmit}
            >

              Submit
            </Button>




          </form>
        </Box>
      </Box>
    </Flex>

  );
}



export default Login;
