import { Button } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Parent=styled.div`
    /* border: 1px solid red; */
`
const No = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: relative;
  ${Parent}:hover &{
    /* position: static; */
    left: 10rem;


  position: relative;
  animation: myfirst 5s 2;
  animation-direction: alternate;
  }
`
const NoButton = () => {
  return (
    <>
    <Parent>

    <No>
        No
    </No>
    </Parent>
    </>
  )
}

export default NoButton