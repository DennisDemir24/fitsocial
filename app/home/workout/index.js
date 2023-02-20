import { FlatList, Text, Pressable } from 'react-native'
import React, {useState} from 'react'
import { SafeArea } from '../../components/utils/safe-area.components'
import { SmallCard } from '../../components'
import styled from 'styled-components/native'
import { DATA } from '../../mock'

const ViewContainer = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #090B0E;
`;

const ScreenTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #F9F9F9;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
`

const WorkoutContainer = styled.View`
    flex: 1;
`;

const WorkoutList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  }
})``;

const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
    padding-right: 16px;
`

const AddWorkoutButton = styled.Pressable`
    background-color: #F9F9F9;
    padding: 6px;
    border-radius: 10px;
    width: 100px;
    align-items: center;

`

const renderItem = (item) => {
  return (
    <WorkoutContainer>
      <SmallCard workout={item} />
    </WorkoutContainer>
  )
}

const Workout = () => {
  const [workouts, setWorkouts] = useState(DATA)
  return (
    <SafeArea>
      <ScreenTitle>My workouts</ScreenTitle>
      <ButtonContainer>
        <AddWorkoutButton onPress={() => console.log("PRESSED")}>
          <Text>Add workout</Text>
        </AddWorkoutButton>
        </ButtonContainer >
      <ViewContainer>
        <WorkoutList 
          data={DATA}
          renderItem={renderItem}
        />
      </ViewContainer>
    </SafeArea>
  )
}

export default Workout