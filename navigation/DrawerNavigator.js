import React from 'react';
import * as drawer from '@react-navigation/drawer';
// import { DrawerContent } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Page_1 from '../screens/Page_1';
import Page_2 from '../screens/Page_2';
import Page_3 from '../screens/Page_3';

const Drawer = drawer.createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#fff',
					fontSize: 24,
					width: 225,
				},
				drawerLabelStyle: {
					fontSize: 24,
					color: '#997f66',
					fontWeight: 'bold',
				},
			}}
		>
			<Drawer.Screen
				name="Home_1"
				component={Home}
				options={{
					title: 'Home',
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
					},
				}}
			/>
			<Drawer.Screen
				name="Page 1"
				component={Page_1}
				options={{
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
					},
				}}
			/>
			<Drawer.Screen
				name="Page 2"
				component={Page_2}
				options={{
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
					},
				}}
			/>
			<Drawer.Screen
				name="Page 3"
				component={Page_3}
				options={{
					headerTitleStyle: {
						fontWeight: 'bold',
						fontSize: 24,
					},
				}}
			/>
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
