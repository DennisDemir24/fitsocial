import { View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import React from 'react'

const SearchBarContainer = styled.View`
    padding: 10px;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 10px;
`



const SearchBar = () => {
  return (
    <SearchBarContainer>
        <Searchbar placeholder="Search" />
    </SearchBarContainer>
  )
}

export default SearchBar