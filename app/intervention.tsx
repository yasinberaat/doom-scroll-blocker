import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function InterventionScreen() {
  return (
    <View style={styles.container}>
      {/* Scanline Overlay */}
      <View style={styles.scanline} />
      
      {/* Top App Bar */}
      <View style={styles.topBar}>
        <View style={styles.terminalIcon}>
          <MaterialIcons name="terminal" size={32} color="#ff003c" />
        </View>
        <Text style={styles.topBarTitle}>System Override</Text>
        <TouchableOpacity style={styles.warningButton}>
          <MaterialIcons name="warning" size={24} color="#ff003c" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Headline Warning */}
        <View style={styles.headlineSection}>
          <Text style={styles.headline}>
            BRAIN ROT{'\n'}DETECTED.
          </Text>
          <Text style={styles.subheadline}>
            Break the loop now
          </Text>
        </View>

        {/* Timer Component */}
        <View style={styles.timerContainer}>
          <View style={styles.timerBox}>
            <Text style={styles.timerNumber}>05</Text>
          </View>
          <Text style={styles.timerLabel}>Seconds Remaining</Text>
        </View>

        {/* Body Text */}
        <View style={styles.bodySection}>
          <Text style={styles.bodyText}>
            Dopamine levels are reaching critical saturation. Neural pathways require immediate recalibration.
          </Text>
        </View>

        {/* Progress Bar Section */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Recalibrating Synapses...</Text>
            <Text style={styles.progressPercentage}>15%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressBar, { width: '15%' }]} />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.primaryAction}>
            <MaterialIcons name="logout" size={24} color="#ffffff" />
            <Text style={styles.primaryActionText}>I'M DONE SCROLLING</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryAction} disabled={true}>
            <MaterialIcons name="lock" size={20} color="rgba(255, 255, 255, 0.3)" />
            <Text style={styles.secondaryActionText}>CONTINUE SCROLLING</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer Decoration */}
      <View style={styles.footerDecoration}>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dotLarge]} />
          <View style={[styles.dot, styles.dotMedium]} />
          <View style={[styles.dot, styles.dotSmall]} />
        </View>
      </View>

      {/* Background Elements */}
      <View style={[styles.bgElement, styles.bgElementLeft]} />
      <View style={[styles.bgElement, styles.bgElementRight]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1022',
    overflow: 'hidden',
  },
  scanline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(to bottom, transparent 50%, rgba(166, 13, 242, 0.05) 50%)',
    backgroundSize: '100% 4px',
    zIndex: 10,
    pointerEvents: 'none',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
    zIndex: 20,
  },
  terminalIcon: {
    width: 48,
    height: 48,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  topBarTitle: {
    color: '#ff003c',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadow: '0 0 12px #ff003c',
  },
  warningButton: {
    width: 48,
    height: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 20,
  },
  headlineSection: {
    width: '100%',
    marginBottom: 32,
  },
  headline: {
    color: '#ff003c',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 38,
    paddingBottom: 12,
    paddingTop: 24,
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadow: '0 0 12px #ff003c',
  },
  subheadline: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: 6,
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  timerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 32,
    width: '100%',
    maxWidth: 280,
  },
  timerBox: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 0, 60, 0.1)',
    borderWidth: 1,
    borderColor: '#ff003c',
    shadowColor: '#ff003c',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  timerNumber: {
    color: '#ff003c',
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 70,
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadow: '0 0 12px #ff003c',
  },
  timerLabel: {
    color: '#ff003c',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  bodySection: {
    maxWidth: 280,
    marginBottom: 40,
  },
  bodyText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.7,
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  progressSection: {
    width: '100%',
    maxWidth: 320,
    flexDirection: 'column',
    gap: 12,
    padding: 16,
    marginBottom: 32,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 24,
  },
  progressTitle: {
    color: '#a60df2',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadow: '0 0 8px #a60df2',
  },
  progressPercentage: {
    color: '#a60df2',
    fontSize: 12,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  progressTrack: {
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(166, 13, 242, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.3)',
    padding: 4,
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#a60df2',
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  actionSection: {
    width: '100%',
    maxWidth: 320,
    flexDirection: 'column',
    gap: 16,
  },
  primaryAction: {
    backgroundColor: '#a60df2',
    paddingVertical: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  primaryActionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  secondaryAction: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    opacity: 0.3,
  },
  secondaryActionText: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  footerDecoration: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    opacity: 0.3,
  },
  dot: {
    backgroundColor: '#ff003c',
    borderRadius: 999,
  },
  dotLarge: {
    width: 48,
    height: 4,
  },
  dotMedium: {
    width: 16,
    height: 4,
  },
  dotSmall: {
    width: 8,
    height: 4,
  },
  bgElement: {
    position: 'absolute',
    width: 256,
    height: 256,
    borderRadius: 999,
    pointerEvents: 'none',
  },
  bgElementLeft: {
    top: '25%',
    left: -80,
    backgroundColor: 'rgba(255, 0, 60, 0.1)',
    blurRadius: 100,
  },
  bgElementRight: {
    bottom: '25%',
    right: -80,
    backgroundColor: 'rgba(166, 13, 242, 0.1)',
    blurRadius: 100,
  },
});
