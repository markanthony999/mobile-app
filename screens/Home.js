import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This the Home screen</Text>
			<Button
				style={styles.button}
				onPress={() => navigation.navigate('About Us')}
				title="Go To About Us"
			>
				<Text>Go to About Us</Text>
			</Button>
			<Button
				style={styles.button}
				onPress={() => navigation.toggleDrawer()}
				title="Side Nav"
			>
				<Text>Side Nav</Text>
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#09f',
		alignItems: 'center',
		padding: 10,
		marginVertical: 10,
	},
});
export default Home;
