import React from 'react';
import { ImageBackground, View, Text, Pressable } from 'react-native';
import styles from '../styles/style';

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text_1}>This the Home screen</Text>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('About Us')}
				title="About Us"
			>
				<Text style={styles.text}>About Us</Text>
			</Pressable>
		</View>
	);
};

export default Home;
