import React from 'react';
import * as drawer from '@react-navigation/drawer';
import Home from '../screens/Home';
import Page_1 from '../screens/Page_1';
import Page_2 from '../screens/Page_2';
import Page_3 from '../screens/Page_3';

const Drawer = drawer.createDrawerNavigator();
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Home_1"
				component={Home}
				options={{
					title: 'Home',
				}}
			/>
			<Drawer.Screen name="Page 1" component={Page_1} />
			<Drawer.Screen name="Page 2" component={Page_2} />
			<Drawer.Screen name="Page 3" component={Page_3} />
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;
