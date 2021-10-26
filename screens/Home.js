import React from 'react';
import { View, Text, Pressable, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles/style';

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.text_1}>This the Home screen</Text>
				<Text style={styles.text_1}>
					Please remember each screen can have scrolling capabilities, so the
					screen is longer than it is. We are also dealing with two separate
					operating systems; Android and IOS, so what works on one may not work
					on the other. Once I reach build time we will have a better idea
					regarding the above. It should not matter to the user since each has
					their own phone. I mentioned infrastructure and Google Sheets, once
					you figure out what data you want to receive and instruction you want
					to deploy we can discuss further. If you have any questions, feel free
					to ask.
				</Text>
				<Text style={styles.text_1}>Thank you.</Text>
				<Text style={styles.text_1}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
					vehicula semper pharetra. Nulla ornare nec erat et malesuada. Quisque
					volutpat id nisl vitae pretium. In hac habitasse platea dictumst.
					Donec hendrerit turpis augue, eget laoreet dolor dapibus eget.
					Phasellus id eros ut arcu faucibus sodales. Mauris tempor imperdiet
					dapibus.
				</Text>
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<Pressable
						style={styles.button}
						onPress={() => navigation.navigate('About Us')}
						title="About Us"
					>
						<Text style={styles.text}>About Us</Text>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
