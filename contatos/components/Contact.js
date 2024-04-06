// Contact.js
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Contact = ({ name, phone, photo }) => {
  return (
    <View style={styles.contact}>
      <Image source={photo} style={styles.contactPhoto} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>Name: {name}</Text>
        <Text style={styles.contactPhone}>Phone: {phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  contactInfo: {
    flexDirection: 'column',
  },
  contactName: {
    fontSize: 18,
    marginTop: 10,
  },
  contactPhone: {
    fontSize: 16,
    color: '#200206',
  },
});

export default Contact;
