
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profileStyles';

export default function ProfileInfo() {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.name}>Jesus Pujols Luciano</Text>
      <Text style={styles.title}>Estudiante de Programación</Text>
      <Text style={styles.bio}>
        Aprendiendo apps móviles con Expo.{'\n'}
        Mi meta: crear algo útil.
      </Text>
    </View>
  );
}
