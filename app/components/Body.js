import React from 'react';
import styled from 'styled-components/native';

import { View, Text, FlatList, ScrollView } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements';  

export const Body = styled.FlatList`
    background-color: white;
    flex: 1;
`

export const ItemName = styled.Text`
    font-size: 18px;
`

export const ItemData = styled.Text`
    font-size: 16px;
    /* background-color: #555; */
`


export const Item = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: white;
    height: 60px;
    padding: 20px;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`

export const DataItem = ( props ) => (
    <Item>

        <View style={{flex:1, alignItems:'flex-start'}} >
            <ItemName>{props.name}</ItemName>
        </View>
        <View style={{flex:1, alignItems:'flex-end'}} >
            <ItemData>{props.value}</ItemData>
        </View>
    </Item>


);
