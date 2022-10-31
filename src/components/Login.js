
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Hook,
} from '@chakra-ui/react';
import React, { useState } from "react";

export default function SimpleCard() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);



  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
  event.preventDefault();
  alert(`Email: ${email} & Password: ${password}`);}

   const ValidateLogin = (email, password) => {
    let errors={};
  
    if(!email){
      errors.email="يرجى إدخال الإيميل" 
    } else if(!/\S+@\S+\.\S+/.test(email)){
      errors.email="الإيميل غير صحيح"
    }
  
    if(!password){
      errors.password="يرجى إدخال كلمة المرور"
    } else if(password.length < 5){
      errors.password="الحد الأدنى ٥ خانات"
    }
  
    return errors.password || errors.email? errors: null;
  
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}
          >
            
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" 
               onChange={handleEmail}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password </FormLabel>
              <Input type="password" 
              onChange={handlePassword}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );

}
