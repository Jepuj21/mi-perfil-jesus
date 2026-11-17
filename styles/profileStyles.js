
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#2196F3',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },

  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  title: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
    marginBottom: 8,
  },

  bio: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },

  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },

  badge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: '500',
  },

  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  buttonPrimary: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    margin: '10',
  },

  buttonPrimaryText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',

  },

  buttonSecondary: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196F3',
    margin: '10',
  },

  buttonSecondaryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },

  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default styles;
