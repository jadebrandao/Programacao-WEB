// App.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ContactList from './components/ContactList';
import gabrielPhoto from './assets/minios1.jfif';
import leandroPhoto from './assets/minios2.jfif';
import rodrigoPhoto from './assets/minios3.jfif';
import larissaPhoto from './assets/minios4.jfif';
import jadePhoto from './assets/minios5.jfif';

const App = () => {
  const contacts = [
    { name: 'Gabriel', phone: '123-456-7890', photo: gabrielPhoto },
    { name: 'Leandro', phone: '234-567-8901', photo: leandroPhoto },
    { name: 'Rodrigo', phone: '345-678-9012', photo: rodrigoPhoto },
    { name: 'Larissa', phone: '345-678-9012', photo: larissaPhoto },
    { name: 'Jade', phone: '345-678-9012', photo: jadePhoto }
  ];

  const handleButtonPress = () => {
  
    console.log('Botão "Contatos SOS" pressionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Contatos SOS</Text>
      </TouchableOpacity>
      <View style={styles.contactListContainer}>
        <ContactList contacts={contacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f56883',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 70, 
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f56883',
  },
  contactListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
