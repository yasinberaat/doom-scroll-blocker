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

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      {/* Grid Background */}
      <View style={styles.gridBg} />
      
      {/* Top App Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Initialize // Protocol</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressIndicator}>
        <View style={[styles.progressDot, { backgroundColor: '#a60df2' }]} />
        <View style={[styles.progressDot, { backgroundColor: 'rgba(166, 13, 242, 0.2)' }]} />
        <View style={[styles.progressDot, { backgroundColor: 'rgba(166, 13, 242, 0.2)' }]} />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Headline */}
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>
            Set Your <Text style={styles.headlineAccent}>Limit</Text>
          </Text>
        </View>

        {/* Body Text */}
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            Define your daily scroll threshold. Once breached, the neural terminal locks.
          </Text>
        </View>

        {/* Digital Readout */}
        <View style={styles.digitalReadout}>
          <Text style={styles.readoutLabel}>Tolerance Level</Text>
          <View style={styles.readoutValue}>
            <Text style={styles.readoutNumber}>15</Text>
            <Text style={styles.readoutUnit}>MIN</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>STATUS: BALANCED_MODE</Text>
          </View>
        </View>

        {/* Slider Container */}
        <View style={styles.sliderContainer}>
          <View style={styles.sliderTrack}>
            {/* Notches */}
            <View style={[styles.notch, { backgroundColor: '#a60df2' }]} />
            <View style={[styles.notch, { backgroundColor: '#a60df2' }]} />
            <View style={[styles.notch, { backgroundColor: '#563168' }]} />
            
            {/* Active Progress */}
            <View style={[styles.activeProgress, { width: '50%' }]} />
            
            {/* Slider Thumb */}
            <View style={[styles.sliderThumb, { left: '50%' }]}>
              <View style={styles.thumbIcon}>
                <MaterialIcons name="bolt" size={16} color="#ffffff" />
              </View>
            </View>
          </View>

          {/* Legend */}
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <Text style={styles.legendLabel}>Strict</Text>
              <Text style={styles.legendValue}>5m</Text>
            </View>
            <View style={[styles.legendItem, styles.legendItemCenter]}>
              <Text style={[styles.legendLabel, styles.legendLabelActive]}>Medium</Text>
              <Text style={styles.legendValue}>15m</Text>
            </View>
            <View style={[styles.legendItem, styles.legendItemInactive]}>
              <Text style={styles.legendLabel}>Casual</Text>
              <Text style={styles.legendValue}>30m</Text>
            </View>
          </View>
        </View>

        {/* Footer Actions */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Initialize Protocol</Text>
            <MaterialIcons name="terminal" size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.footerText}>
            // SECURITY_LAYER: ACTIVE{'\n'}
            // ENCRYPTION_MODE: NEURAL_LINK_ESTABLISHED
          </Text>
        </View>
      </View>

      {/* Decorative Elements */}
      <View style={[styles.decoration, styles.decorationTop]} />
      <View style={[styles.decoration, styles.decorationBottom]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0611',
    position: 'relative',
    overflow: 'hidden',
  },
  gridBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(rgba(166, 13, 242, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(166, 13, 242, 0.05) 1px, transparent 1px)',
    backgroundSize: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
    zIndex: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    opacity: 0.8,
    flex: 1,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  placeholder: {
    width: 48,
  },
  progressIndicator: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  progressDot: {
    height: 4,
    flex: 1,
    borderRadius: 2,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 48,
    zIndex: 10,
  },
  headlineContainer: {
    marginBottom: 8,
  },
  headline: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: 40,
    fontFamily: 'SpaceGrotesk_700Bold',
    textShadow: '0 0 8px rgba(166, 13, 242, 0.6)',
  },
  headlineAccent: {
    color: '#a60df2',
    fontStyle: 'italic',
  },
  bodyContainer: {
    marginBottom: 40,
  },
  bodyText: {
    color: '#b790cb',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 280,
    alignSelf: 'center',
    lineHeight: 24,
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  digitalReadout: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    marginBottom: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.2)',
    backgroundColor: 'rgba(166, 13, 242, 0.05)',
  },
  readoutLabel: {
    color: '#a60df2',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  readoutValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  readoutNumber: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  readoutUnit: {
    color: '#a60df2',
    fontSize: 20,
    marginLeft: 4,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  statusBadge: {
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'rgba(166, 13, 242, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.4)',
    borderRadius: 4,
  },
  statusText: {
    color: '#a60df2',
    fontSize: 10,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  sliderContainer: {
    marginBottom: 48,
  },
  sliderTrack: {
    height: 24,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  notch: {
    width: 4,
    height: 12,
    borderRadius: 2,
    marginTop: -6,
  },
  activeProgress: {
    position: 'absolute',
    height: 6,
    borderRadius: 3,
    backgroundColor: '#a60df2',
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  sliderThumb: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#a60df2',
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    transform: [{ rotate: '45deg' }],
  },
  thumbIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 32,
  },
  legendItem: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  legendItemCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.2)',
  },
  legendItemInactive: {
    opacity: 0.4,
  },
  legendLabel: {
    color: '#b790cb',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 4,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  legendLabelActive: {
    color: '#a60df2',
  },
  legendValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  footer: {
    marginTop: 'auto',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#a60df2',
    paddingVertical: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  footerText: {
    color: 'rgba(166, 13, 242, 0.6)',
    fontSize: 9,
    fontFamily: 'monospace',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 12,
  },
  decoration: {
    position: 'absolute',
    borderRadius: 999,
    pointerEvents: 'none',
  },
  decorationTop: {
    top: 80,
    right: -80,
    width: 256,
    height: 256,
    backgroundColor: 'rgba(166, 13, 242, 0.1)',
    blurRadius: 100,
  },
  decorationBottom: {
    bottom: 160,
    left: -80,
    width: 256,
    height: 256,
    backgroundColor: 'rgba(166, 13, 242, 0.05)',
    blurRadius: 80,
  },
});
