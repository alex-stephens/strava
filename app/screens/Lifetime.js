import React from 'react';
import { View, Text, ScrollView, FlatList} from 'react-native';
import styled from 'styled-components/native';

import {Header, Title} from '../components/Header';
import {Body, Item, DataItem} from '../components/Body';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        name: 'Distance',
        value: '4023 km'
    },
    {
        name: 'Hello',
        value: '2'
    },
    {
        name: 'Activities',
        value: '3'
    },
    {
        name: 'Activities',
        value: '4'
    },
    {
        name: 'Activities',
        value: '5'
    },
    {
        name: 'Memes',
        value: '6'
    },
    {
        name: 'Activities',
        value: '7'
    },
    {
        name: 'Activities',
        value: '8'
    },
    {
        name: 'Activities',
        value: '9'
    },
    {
        name: 'Activities',
        value: '10'
    },
    {
        name: 'What is going on',
        value: '10000'
    },
    {
        name: 'Memes',
        value: '1323'
    },
    {
        name: 'Yeet',
        value: '11'
    },
    {
        name: 'Test',
        value: '12'
    },
    {
        name: 'Activities',
        value: '13'
    },
    {
        name: 'Time active',
        value: '234.2 hrs'
    }
  ];


export default function Lifetime() {

    const renderItem = ({ item }) => (
        <DataItem
            name={item.name}
            value={item.value}
        />
    );

    return (
        <SafeAreaView style={{flex:1}}>
            <Header>
                <Title>Lifetime stats</Title>
            </Header>

            {/* // <View style={{flex:1}}> */}
            <Body
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => 'key'+index.toString()}
            />
            {/* </View> */}
        </SafeAreaView>
    );
}