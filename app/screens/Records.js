import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import {Header, Title} from '../components/Header';
import {Body, Item, DataItem} from '../components/Body';

const DATA = [
    {
        name: '400 m',
        value: '1:25'
    },
    {
        name: '1 km',
        value: '3:54'
    },
    {
        name: '1 mi',
        value: '7:02'
    },
    {
        name: '5 km',
        value: '23:22.1'
    },
    {
        name: '10 km',
        value: '23:22.1'
    },
    {
        name: 'Half marathon',
        value: '1:55:04.3'
    },
]

export default function Records() {
    
    const renderItem = ({ item }) => (
        <DataItem
            name={item.name}
            value={item.value}
        />
    );

    return (
        <SafeAreaView style={{flex:1}}>
            <Header>
                <Title>Personal records</Title>
            </Header>

            <Body
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

