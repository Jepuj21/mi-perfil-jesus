
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profileStyles';

export default function ProfileFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Todos los derechos reservados{'\n'}
        {new Date().getFullYear()}
      </Text>
    </View>
  );
}
