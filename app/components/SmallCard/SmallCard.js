import { View, Text } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'
import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


const WorkoutCard = styled(Card)`
    background-color: #1E2126;
    margin-bottom: 10px;
`

const WorkoutCover = styled(Card.Cover)`
    background-color: #1E2126;
`

const CardInfo = styled.View`
    padding: 10px;
`;

const CardTitle = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #F9F9F9;
`

const CardSubTitle = styled.Text`
    font-size: 13px;
    color: #AFB1B6;
    padding-top: 6px;
`;

const LevelContainer = styled.View`
    padding-top: 6px;
    flex-direction: row;
`

const Level = styled.Text`
    font-size: 13px;
    color: #AFB1B6;
    padding-left: 6px;
`

const IconContainer = styled.View`
    padding-top: 2px;
`

const SmallCard = ({workout = {}}) => {
    const {
        id,
        name,
        description,
        image = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        level,
        day
    } = workout.item;


    const renderIcons = () => {
        if (level === "Intermediate") {
            return(
                [1,2].map((i) => {
                    return (
                        <IconContainer key={i}>
                            <AntDesign name="star" size={12} color="#FF5722" />
                        </IconContainer>
                    )
                })
            )
    
        } else if (level === "Hard") {
            return(
                [1,2,3].map((i) => {
                    return (
                        <IconContainer key={i}>
                            <AntDesign name="star" size={12} color="#FF5722" />
                        </IconContainer>
                    )
                })
            )
        } else {
            return(
                [1].map((i) => {
                    return (
                        <IconContainer key={i}>
                            <AntDesign name="star" size={12} color="#FF5722" />
                        </IconContainer>
                    )
                })
            )
        }
    }


  return (
    <WorkoutCard>
        <WorkoutCover key={id} source={{uri: image}} />
        <CardInfo>
            <CardTitle>{name}</CardTitle>
            <CardSubTitle>{description}</CardSubTitle>
            <LevelContainer>
                {renderIcons()}
                <Level>{level}</Level>
            </LevelContainer>
        </CardInfo>
    </WorkoutCard>
  )
}

export default SmallCard