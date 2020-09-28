import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

function Login({navigation}) {
    return (
        // <Container>
        //     <Button 
        //         title="Log in with Strava" 
        //         onPress={() => navigation.navigate('Lifetime')} 
        //     />
        // </Container>
        <View>
            <Text >Welcome to React Native!</Text>
            {/* <Button onPress={this._authorize} title='Login' /> */}
        </View>
      
    );
}

export default Login;
