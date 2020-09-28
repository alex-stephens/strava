import 'react-native-gesture-handler';
import React, {Component, useState, useCallback, useMemo} from 'react';
import React, {  } from 'react';

import styled from 'styled-components/native';
// import { Icon } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { authorize } from 'react-native-app-auth';

import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Button} from 'react-native';

import Login from './screens/Login';

// logged in screens
import Lifetime from './screens/Lifetime';
import Records from './screens/Records';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const isLoggedIn = false;

const defaultAuthState = {
  hasLoggedInOnce: false,
  provider: '',
  accessToken: '',
  accessTokenExpirationDate: '',
  refreshToken: ''
};

const [authState, setAuthState] = useState(defaultAuthState);


const config = {
  clientId: '38310',
  clientSecret: '78b2f8100a4cc73e6587ede2311d83f050300aec',
  redirectUrl: 'com.strava.dashboard:/oauthredirect',
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.strava.com/oauth/mobile/authorize',
    tokenEndpoint:
      'https://www.strava.com/oauth/token?client_id=38310&client_secret=78b2f8100a4cc73e6587ede2311d83f050300aec',
  },
  scopes: ['activity:read_all'],
};

// result: http://localhost/exchange_token?state=K5iD5vz0Wpae_iIj9jknwg&code=4c8c4542e536dab446a66dab7f421aaf50a6fe62&scope=read,activity:read_all

export default class App extends Component {

  async _authorize () {
    try {
      // Make request to Google to get token
      const authState = await authorize(config)

      console.log("Memes")
      console.log({ authState })
    } catch (error) {
      console.log('error', error)
    }
  }


  render () {
  return (
    <NavigationContainer>

      {!isLoggedIn ? (
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Login" component={() => 
            <View>
              <Button onPress={this._authorize} title='Login' />
            </View>}>
            
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Lifetime') {
                iconName = "home";
              } else if (route.name === 'Records') {
                iconName = "rocket";
              }

              // You can return any component that you like here!
              return <Icon name={iconName}  size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fc4c02', /* Strava orange */
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Lifetime" component={Lifetime} />
          <Tab.Screen name="Records" component={Records} />
        </Tab.Navigator>
      )}
    </NavigationContainer>    
  );
  }
}

