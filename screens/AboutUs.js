import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/style';

const AboutUs = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text_1}>This is the About Us Screen</Text>
			<View style={{ flex: 1, justifyContent: 'flex-end' }}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate('Home')}
					title="Home"
				>
					<Text style={styles.text}>Home</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default AboutUs;
