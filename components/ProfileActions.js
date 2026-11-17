
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/profileStyles';

export default function ProfileActions() {
  const manejarContacto = () => {
    alert('¡Gracias por tu interés! JesusPujols456@gmail.com');
  };

  return (
    <View style={styles.actionsContainer}>
      <Pressable
        style={styles.buttonPrimary}
        onPress={manejarContacto}
      >
        <Text style={styles.buttonPrimaryText}>Contáctame</Text>
      </Pressable>

      <Pressable
        style={styles.buttonSecondary}
        onPress={() => alert('Próximamente: mi portafolio')}
      >
        <Text style={styles.buttonSecondaryText}>Mi portafolio</Text>
      </Pressable>
    </View>
  );
}
