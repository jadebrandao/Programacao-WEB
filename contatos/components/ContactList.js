// ContactList.js
import React from 'react';
import { View, ScrollView } from 'react-native';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      {contacts.map((contact, index) => (
        <View key={index}>
          <Contact name={contact.name} phone={contact.phone} photo={contact.photo} />
        </View>
      ))}
    </ScrollView>
  );
}

export default ContactList;
