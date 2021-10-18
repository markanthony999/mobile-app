import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/style';

const Page_1 = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text_1}>This is Page 1</Text>
		</View>
	);
};

export default Page_1;
