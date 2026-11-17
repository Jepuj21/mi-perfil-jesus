
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/profileStyles';

export default function Skills() {
  return (
    <View style={styles.skillsContainer}>
      <Text style={styles.sectionTitle}>Mis habilidades</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>React Native</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Diseño UI</Text>
      </View>
    </View>
  );
}
