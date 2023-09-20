// AudioPlayer.js
import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const AudioPlayer = ({ audioSource }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    (async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioSource } // Substitua com a URL do seu arquivo de áudio
      );
      setSound(sound);
    })();
  }, [audioSource]);

  const playAudio = async () => {
    if (!sound) return;

    await sound.playAsync();
    setIsPlaying(true);
  };

  const pauseAudio = async () => {
    if (!sound) return;

    await sound.pauseAsync();
    setIsPlaying(false);
  };

  return (
    <View>
      <Button
        title="Iniciar Áudio"
        onPress={playAudio}
        disabled={isPlaying}
      />
      <Button
        title="Parar Áudio"
        onPress={pauseAudio}
        disabled={!isPlaying}
      />
    </View>
  );
};

export default AudioPlayer;
