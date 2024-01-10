import { Text,View, SafeAreaView, StyleSheet, ScrollView, Image, Button, Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const contactme = "https://www.instagram.com/adenprasetyaa";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        Selamat Datang Di Portofolio Saya!
      </Text>
      <View style={{alignItems:'center'}}>
      <Image style={{width:200, height:200, borderRadius:100}} source={require('./assets/IMG_7214.png')} />
      <Text style={styles.paragraph}>
        Aden Prasetya Ramadhan
      </Text>
      <Text style={{textAlign:'center', color: '#ffffff'}}>
        Saya Adalah Siswa Smk Telkom Purwokerto,Saya Berada Di Jurusan Rekayasa Perangkat Lunak Yang Memiliki Kemauan Untuk Mempelajari Hal Hal Yang Baru
      </Text>
      <View style={{marginTop: 30}}>
       <Button
        title="Klik Saya"
        color="#8a2be2"
        onPress={() => Linking .openURL(contactme)}
      /></View>
      <Text style={styles.paragraph}>
        My Desain!
      </Text>
       <Image style={{width:150, height:150,}} source={require('./assets/segeles.png')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#008b9b',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#ffffff"}
})
    
