import { StyleSheet, Image } from 'react-native';
import img from '@/assets/images/Khad.png';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={img} style = {{width: 100,height:100, borderRadius: 64}}></Image>
      <Text style={styles.title}>Welcome!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  
});