import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import List from './components/List';
import VideoPlayer from './components/VideoPlayer';
import AudioPlayer from './components/AudioPlayer';
import ListaDeDesejos from './components/ListaDeDesejos';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.header}>Maradonas Mobile</Text>
      </View>
      <TextInput placeholder="Digite algo..." style={styles.input} />
      <Button title="Enviar" style={styles.button} />
      <View style={styles.ListaDesejo}>
      < ListaDeDesejos style={styles.ListaDesejo}/>
     </View>
      <VideoPlayer style={styles.listHeader} videoSource="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
     
      <View style={styles.Audio}>
      <Text style={styles.Audio}>Audio</Text>
      <AudioPlayer audioSource="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 0,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom:20,
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    maxHeight: '60%',
    padding: 10,
  },
  listHeader: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
  Audio: {
    textAlign: 'center',
    color:'blue',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    maxHeight: '60%',
    paddingTop: 5,
    marginTop:10,
    marginBottom:10,
  },
  ListaDesejo: {
    textAlign: 'center',
    color:'blue',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    maxHeight: '60%',
    padding:10,
    marginTop:10,
    marginBottom:10,
  }
});
