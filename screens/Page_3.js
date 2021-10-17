import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/style';

const Page_3 = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is Page 3</Text>

			<Pressable
				style={styles.button}
				onPress={() => navigation.toggleDrawer()}
				title="Side Bar"
			>
				<Text style={styles.text}>Side Bar</Text>
			</Pressable>
		</View>
	);
};

export default Page_3;
