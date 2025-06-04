
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput placeholder="Email" placeholderTextColor="gray" value={name} onChangeText={setName} style={{ borderColor: 'black', borderWidth: 1, marginBottom: 10 }} />
      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge} keyboardType="numeric" style={{  borderColor: 'black', borderWidth: 1, marginBottom: 10 }} />
      <Button title="Update" onPress={() => alert(`Updated: ${name}, ${age}`)} />
    </View>
  );
};