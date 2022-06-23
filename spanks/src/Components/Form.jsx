import React from 'react'
import { Button,Flex, Center, Heading,Stack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import NoButton from './NoButton'
const Form = () => {
const clickNo=()=>{
    
}
const toast = useToast({
    position: 'top',
    title: 'love is dumb or dumb is you or you are both❤',
    containerStyle: {
      width: '800px',
      status:'success',
      maxWidth: '100%',
    },
  })

  return (<>
    <Center alignItems={'center'}>
        <Stack>

        <Heading as='h1' size='4xl'>
            Are You Dumb or in love???
        </Heading>
         <Flex gap={2} justifyContent={'center'}>
        <Button colorScheme={'green'} variant='outline' onClick={() => {
        toast({
          containerStyle: {
            border: '2px solid red',
            backgroundColor:'yellowgreen'
          },
        })
      }}>YES!</Button>

        <NoButton></NoButton>
        </Flex>
        </Stack>
       
    </Center>


  </>
  )
}

export default Form