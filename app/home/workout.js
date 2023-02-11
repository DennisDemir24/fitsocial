import { View, Text } from 'react-native'
import React from 'react'
import { SafeArea } from '../components/utils/safe-area.components'
import styled from 'styled-components/native'

const ViewContainer = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #090B0E;
`;

const Workout = () => {
  return (
    <SafeArea>
      <ViewContainer>
        <Text>Feed</Text>
      </ViewContainer>
    </SafeArea>
  )
}

export default Workout