import React from 'react';
import LoginScreen from './src/login/LoginScreen';
import SettingScreen from './src/setting/SettingScreen';
import ResetPasswordScreen from './src/forget_password/ResetPasswordScreen';
import 'react-native-gesture-handler';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './src/utils/Colors';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={LoginScreen}>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerTitleStyle: {
                            alignSelf: 'center',
                            color: Colors.white,
                        },
                        title: 'mSale',
                        headerStyle: {
                            backgroundColor: Colors.appBar,
                        },
                    }}/>
                <Stack.Screen
                    name="SettingScreen"
                    component={SettingScreen}
                    options={{
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            alignSelf: 'center',
                            color: Colors.white,
                        },
                        title: 'Thiết lập cấu hình',
                        headerStyle: {
                            backgroundColor: Colors.appBar,
                        },
                    }}/>

                <Stack.Screen
                    name="ResetPasswordScreen"
                    component={ResetPasswordScreen}
                    options={{
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            alignSelf: 'center',
                            color: Colors.white,
                        },
                        title: 'Quên mật khẩu',
                        headerStyle: {
                            backgroundColor: Colors.appBar,
                        },
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
