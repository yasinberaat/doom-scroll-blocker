# Doom Scroll Blocker - Technical Context

## Technology Stack
- **Framework**: React Native with Expo
- **Language**: JavaScript/TypeScript
- **State Management**: React Context API or Redux Toolkit
- **Styling**: Styled-components or React Native Elements
- **Navigation**: React Navigation
- **Storage**: AsyncStorage for local data persistence
- **Background Processing**: Expo Background Fetch
- **Notifications**: Expo Notifications

## Development Setup
- **IDE**: VS Code with React Native Tools
- **Simulator**: Expo Go app for development
- **Version Control**: Git
- **Package Manager**: npm or yarn
- **Platform Support**: iOS and Android

## Critical Technical Constraints

### System-Wide Overlay Limitations
**Expo Limitations:**
- Expo does not support drawing system-wide overlays over other apps
- Cannot create floating windows or true system overlays
- Limited to in-app notifications and system notifications

**Alternative Strategies:**
1. **Push Notifications Approach**
   - Use Expo Notifications to send intervention notifications
   - Notifications appear over any app when screen is on
   - Can include actions (deep links back to app)
   - Requires user permission but works system-wide

2. **Usage Stats API Integration**
   - Android: Use `expo-device` and native modules for usage statistics
   - iOS: Limited due to privacy restrictions, rely on app-based tracking
   - Monitor app usage patterns to trigger interventions

3. **Background Monitoring**
   - Use Expo Background Fetch for periodic checks
   - Track app usage through foreground/background state changes
   - Store usage patterns locally for analysis

### Platform-Specific Considerations
**Android:**
- More permissive for usage statistics
- Can access running apps through native modules
- Better background processing capabilities

**iOS:**
- Stricter privacy restrictions
- Limited usage statistics access
- Background execution more restricted

## Technical Implementation Strategy

### Phase 1: App-Based Tracking
- Track when user opens social media apps through our app
- Use deep linking and app switching detection
- Implement basic timing mechanisms

### Phase 2: Notification-Based Interventions
- Implement scheduled notifications
- Use rich notifications with actions
- Create engaging notification content

### Phase 3: Enhanced Monitoring
- Explore native module development for advanced features
- Implement usage pattern analysis
- Add predictive intervention timing

## Dependencies Analysis
```
expo: ~50.0.0
expo-device: ~5.4.0
expo-notifications: ~0.27.0
expo-background-fetch: ~11.3.0
expo-task-manager: ~11.5.0
@react-navigation/native: ^6.1.0
react-native-screens: ^3.29.0
react-native-safe-area-context: ^4.8.0
```

## Performance Considerations
- **Battery Usage**: Minimize background processing
- **Memory Management**: Efficient state management
- **Network Usage**: Offline-first approach
- **Startup Time**: Optimize app launch performance

## Security & Privacy
- **Local Storage**: All usage data stored locally
- **No Cloud Sync**: Privacy-first approach
- **Minimal Permissions**: Only request necessary permissions
- **Data Anonymization**: No personal identifiers collected
