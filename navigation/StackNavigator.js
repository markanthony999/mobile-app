import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={DrawerNavigator}
				options={{
					title: 'Welcome',
					headerStyle: {
						backgroundColor: '#09f',
					},
				}}
			/>
			<Stack.Screen name="Welcome" component={Home} />
			<Stack.Screen name="About Us" component={AboutUs} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
