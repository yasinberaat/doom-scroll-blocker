import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Top App Bar */}
        <View style={styles.topBar}>
          <View style={styles.cpuIcon}>
            <MaterialCommunityIcons name="memory" size={24} color="#a60df2" />
          </View>
          <Text style={styles.topBarTitle}>DOPAMINE_v1.0</Text>
          <TouchableOpacity style={styles.warningButton}>
            <MaterialIcons name="warning" size={24} color="#ff3131" />
          </TouchableOpacity>
        </View>

        {/* Headline Status */}
        <View style={styles.headlineSection}>
          <Text style={styles.headline}>System Integrity: Critical</Text>
          <Text style={styles.subheadline}>COGNITIVE LOAD EXCEEDED // RECEPTOR DOWNGRADE</Text>
        </View>

        {/* Central Dopamine Battery */}
        <View style={styles.batterySection}>
          <View style={styles.batteryHousing}>
            <View style={[styles.batterySegment, { backgroundColor: 'rgba(166, 13, 242, 0.2)' }]} />
            <View style={[styles.batterySegment, { backgroundColor: 'rgba(166, 13, 242, 0.4)' }]} />
            <LinearGradient
              colors={['#a60df2', '#8b0bc7']}
              style={[styles.batterySegment, styles.batterySegmentActive]}
            />
            <View style={[styles.batterySegment, { backgroundColor: 'rgba(255, 255, 255, 0.05)' }]} />
            <View style={[styles.batterySegment, { backgroundColor: 'rgba(255, 255, 255, 0.05)' }]} />
            <View style={[styles.batterySegment, { backgroundColor: 'rgba(255, 255, 255, 0.05)' }]} />
            <View style={styles.batteryCap} />
          </View>
          <View style={styles.batteryInfo}>
            <Text style={styles.batteryLabel}>Dopamine Battery</Text>
            <View style={styles.batteryValue}>
              <Text style={styles.batteryPercentage}>32%</Text>
              <Text style={styles.batteryCharge}>CHARGE</Text>
            </View>
          </View>
        </View>

        {/* Brain Rot Progress Bar */}
        <View style={styles.brainRotSection}>
          <View style={styles.brainRotHeader}>
            <Text style={styles.brainRotTitle}>Brain Rot Level</Text>
            <Text style={styles.brainRotPercentage}>85%</Text>
          </View>
          <View style={styles.brainRotTrack}>
            <LinearGradient
              colors={['#ff3131', '#cc0000']}
              style={[styles.brainRotProgress, { width: '85%' }]}
            />
          </View>
          <View style={styles.brainRotFooter}>
            <Text style={styles.brainRotStatus}>FLICKERING_NEON_RED_ACTIVE</Text>
            <Text style={styles.brainRotEstimate}>EST. BURNOUT: 12M</Text>
          </View>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Scroll Depth</Text>
            <Text style={styles.statValue}>1.2 KM</Text>
            <View style={styles.statTrack}>
              <View style={[styles.statProgress, { width: '67%' }]} />
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Time Sink</Text>
            <Text style={styles.statValue}>4H 12M</Text>
            <View style={styles.statTrack}>
              <LinearGradient
                colors={['#ff3131', '#cc0000']}
                style={[styles.statProgress, { width: '100%' }]}
              />
            </View>
          </View>
        </View>

        {/* Visual Log */}
        <View style={styles.visualLogSection}>
          <Text style={styles.visualLogTitle}>Visual Log: Recent Triggers</Text>
          <View style={styles.visualLogGrid}>
            <View style={styles.visualLogItem}>
              <ImageBackground
                source={{ uri: 'https://via.placeholder.com/150/150' }}
                style={styles.visualLogImage}
                imageStyle={styles.visualLogImageStyle}
              >
                <LinearGradient
                  colors={['rgba(5, 5, 5, 0.9)', 'transparent']}
                  style={styles.visualLogGradient}
                />
                <View style={styles.visualLogContent}>
                  <Text style={styles.visualLogLabel}>Social_Feed_01</Text>
                  <Text style={styles.visualLogDescription}>Triggered Dopamine Spike</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.visualLogItem}>
              <ImageBackground
                source={{ uri: 'https://via.placeholder.com/150/150' }}
                style={styles.visualLogImage}
                imageStyle={styles.visualLogImageStyle}
              >
                <LinearGradient
                  colors={['rgba(5, 5, 5, 0.9)', 'transparent']}
                  style={styles.visualLogGradient}
                />
                <View style={styles.visualLogContent}>
                  <Text style={[styles.visualLogLabel, { color: '#ff3131' }]}>Short_Video_Loop</Text>
                  <Text style={styles.visualLogDescription}>Rapid Attention Decay</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="dashboard" size={24} color="#39ff14" />
          <Text style={[styles.navLabel, { color: '#39ff14' }]}>HUD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="shield" size={24} color="rgba(255, 255, 255, 0.4)" />
          <Text style={styles.navLabel}>Shield</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navCenter]}>
          <View style={styles.navCenterButton}>
            <MaterialIcons name="bolt" size={32} color="#ffffff" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="monitor" size={24} color="rgba(255, 255, 255, 0.4)" />
          <Text style={styles.navLabel}>Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="settings" size={24} color="rgba(255, 255, 255, 0.4)" />
          <Text style={styles.navLabel}>Sync</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  scanline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    zIndex: 50,
    pointerEvents: 'none',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
    zIndex: 10,
  },
  cpuIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.3)',
    borderRadius: 8,
  },
  topBarTitle: {
    color: '#a60df2',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  warningButton: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headlineSection: {
    paddingTop: 16,
    marginBottom: 24,
  },
  headline: {
    color: '#ff3131',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  subheadline: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 10,
    letterSpacing: 5,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  batterySection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    marginBottom: 24,
    position: 'relative',
  },
  batteryHousing: {
    width: 128,
    height: 256,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 8,
    flexDirection: 'column-reverse',
    gap: 4,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  batterySegment: {
    height: '16.66%',
    width: '100%',
    borderRadius: 4,
  },
  batterySegmentActive: {
    backgroundColor: '#a60df2',
    shadowColor: '#a60df2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  batteryCap: {
    position: 'absolute',
    top: -16,
    left: '50%',
    marginLeft: -24,
    width: 48,
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 4,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  batteryInfo: {
    marginTop: 24,
    alignItems: 'center',
  },
  batteryLabel: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  batteryValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  batteryPercentage: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  batteryCharge: {
    color: '#a60df2',
    fontSize: 14,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  brainRotSection: {
    flexDirection: 'column',
    gap: 12,
    padding: 16,
    backgroundColor: 'rgba(166, 13, 242, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(166, 13, 242, 0.1)',
    borderRadius: 12,
    marginBottom: 24,
  },
  brainRotHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 24,
  },
  brainRotTitle: {
    color: '#ff3131',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  brainRotPercentage: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  brainRotTrack: {
    height: 16,
    borderRadius: 8,
    backgroundColor: '#050505',
    borderWidth: 1,
    borderColor: 'rgba(255, 49, 49, 0.2)',
    overflow: 'hidden',
  },
  brainRotProgress: {
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#ff3131',
    shadowColor: '#ff3131',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  brainRotFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brainRotStatus: {
    color: 'rgba(255, 49, 49, 0.6)',
    fontSize: 10,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  brainRotEstimate: {
    color: 'rgba(255, 49, 49, 0.6)',
    fontSize: 10,
    fontFamily: 'monospace',
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'SpaceGrotesk_500Medium',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  statTrack: {
    height: 4,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    marginTop: 4,
  },
  statProgress: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 2,
  },
  visualLogSection: {
    marginBottom: 32,
  },
  visualLogTitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
    paddingHorizontal: 4,
    marginBottom: 12,
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  visualLogGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 32,
  },
  visualLogItem: {
    flex: 1,
  },
  visualLogImage: {
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    overflow: 'hidden',
  },
  visualLogImageStyle: {
    borderRadius: 8,
  },
  visualLogGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  visualLogContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    gap: 12,
  },
  visualLogLabel: {
    color: '#a60df2',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  visualLogDescription: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
  bottomNav: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 20,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  navCenter: {
    position: 'relative',
    top: -32,
  },
  navCenterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#a60df2',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    borderWidth: 4,
    borderColor: '#050505',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  navLabel: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'SpaceGrotesk_700Bold',
  },
});
