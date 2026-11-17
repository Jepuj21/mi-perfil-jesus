
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import ProfilePhoto from './components/ProfilePhoto';
import ProfileInfo from './components/ProfileInfo';
import Skills from './components/Skills';
import ProfileActions from './components/ProfileActions';
import ProfileFooter from './components/ProfileFooter';
import styles from './styles/profileStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ProfilePhoto />
        <ProfileInfo />
        <Skills />
        <ProfileActions />
        <ProfileFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
