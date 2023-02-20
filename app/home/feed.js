import React from 'react'
import { SafeArea } from '../components/utils/safe-area.components'
import { SearchBar } from '../components'
import styled from 'styled-components/native'

const ViewContainer = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #090B0E;
`;


const Feed = () => {
  return (
    <SafeArea>
      <ViewContainer>
        <SearchBar />
      </ViewContainer>
    </SafeArea>
  )
}

export default Feed