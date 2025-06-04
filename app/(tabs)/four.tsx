import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

interface User {
  company: string;
  email: string;
}

export default function ListScreen() {
  const [data, setData] = useState<User[]>([]); 

  useEffect(() => {
    fetch('https://fakejson-api.mock.beeceptor.com/users')
      .then(res => res.json())
      .then(json => {
        console.log('Fetched data:', json);
        setData(json);
      })
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }, []);

  if (data.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>Company: {item.company}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
