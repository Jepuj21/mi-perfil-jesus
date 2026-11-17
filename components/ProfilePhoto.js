
import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/profileStyles';

export default function ProfilePhoto() {
  return (
    <View style={styles.photoContainer}>
      <Image
        source={require( '../assets/PerfilPhoro.jpg')
        }
        style={styles.photo}
      />
    </View>
  );
}
