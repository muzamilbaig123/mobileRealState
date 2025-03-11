import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Footer () {  

return (
    <SafeAreaView style={styles.container}>
      {/* Column 1: Logo */}
      <View style={styles.logoColumn}>
        <Image 
          source={{uri: "https://realcoresolutions.com/wp-content/uploads/2023/08/About-Pic.png"}} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>

      {/* Column 2: Heading and Paragraph */}
      <View style={styles.contentColumn}>
        <Text style={styles.heading}>Real Core Solutions</Text>
        <Text style={styles.paragraph}>
          Providing innovative technology solutions for businesses of all sizes. 
          Our mission is to deliver high-quality services that help our clients 
          achieve their goals and transform their operations.
        </Text>
        <View style={styles.contactInfo}>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:info@realcoresolutions.com')}>
            <Text style={styles.contactText}>info@realcoresolutions.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('tel:+1234567890')}>
            <Text style={styles.contactText}>+1 (234) 567-890</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  logoColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  logo: {
    width: 60,
    height: 80,
  },
  contentColumn: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  contactInfo: {
    marginTop: 5,
  },
  contactText: {
    fontSize: 14,
    color: '#0066cc',
    marginBottom: 3,
    textAlign: "center",
  }
});

