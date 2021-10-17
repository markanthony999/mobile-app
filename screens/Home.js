import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/style';

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This the Home screen</Text>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('About Us')}
				title="About Us"
			>
				<Text style={styles.text}>Go to About Us</Text>
			</Pressable>
			<Pressable
				style={styles.button}
				onPress={() => navigation.toggleDrawer()}
				title="Side Nav"
			>
				<Text style={styles.text}>Side Nav</Text>
			</Pressable>
		</View>
	);
};

export default Home;
