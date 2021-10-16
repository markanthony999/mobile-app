import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const Page_1 = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>This is Page 1</Text>

			<Button
				style={styles.button}
				onPress={() => navigation.toggleDrawer()}
				title="Side Bar"
			>
				<Text>Side Bar</Text>
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
});
export default Page_1;
