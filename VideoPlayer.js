// VideoPlayer.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ videoSource }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const toggleVideo = () => {
    setVideoIsPlaying(!videoIsPlaying);
  };

  return (
    <View style={styles.videoContainer}>
      <Video
        source={{ uri: videoSource }}
        shouldPlay={videoIsPlaying}
        useNativeControls
        style={styles.video}
      />
      <Button
        title={videoIsPlaying ? 'Pausar Vídeo' : 'Reproduzir Vídeo'}
        onPress={toggleVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    marginTop: 20,
    width: '100%',
    aspectRatio: 16 / 9,
  },
  video: {
    flex: 1,
  },
});

export default VideoPlayer;
