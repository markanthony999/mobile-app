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
					title: 'EmpireComputing',
					headerStyle: {
						backgroundColor: '#997f66',
					},

					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
						color: 'white',
					},
					headerTitleAlign: 'center',
				}}
			/>
			<Stack.Screen name="Welcome" component={Home} />

			<Stack.Screen
				name="About Us"
				options={{
					headerStyle: {
						backgroundColor: '#997f66',
					},

					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
						color: 'white',
					},
					headerTitleAlign: 'center',
				}}
				component={AboutUs}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
