import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SocialProfileWithImage(props) {
  return (
    <Center py={10}>
      <Box
        maxW={'390px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image

          h={'35px'}
          w={'full'}
          src={
            'header.png'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={4}>
          <Image size="200px" src={props.img} alt="Course/Camp" rounded="50"/>
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5} >
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {props.nameCourse}
            </Heading>
            <Text color={'gray.500'}> {props.Text} </Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>

            <Stack spacing={0} align={'center'}>
              <Text fontWeight={20}>{props.description}</Text>
            </Stack>
          </Stack>

          <Stack direction='column' mb={-6} p={8} >
            {props.butt && <Button colorScheme='green'>Available </Button>}
            {!props.butt && <Button colorScheme='red'> Closed</Button>}
          </Stack>

        </Box>
      </Box>
    </Center>
  );
}






