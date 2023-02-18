import { FlatList } from 'react-native'
import React from 'react'
import { SafeArea } from '../components/utils/safe-area.components'
import { SmallCard,SearchBar } from '../components'
import styled from 'styled-components/native'

const ViewContainer = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #090B0E;
`;

const WorkoutContainer = styled.View`
    flex: 1;
`;

const WorkoutList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

const renderItem = (item) => {
  return (
    <WorkoutContainer>
      <SmallCard workout={item} />

    </WorkoutContainer>
  )
}

const Feed = () => {
  return (
    <SafeArea>
      <ViewContainer>
        <SearchBar />
        <FlatList 
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={renderItem}
        />
      </ViewContainer>
    </SafeArea>
  )
}

export default Feed