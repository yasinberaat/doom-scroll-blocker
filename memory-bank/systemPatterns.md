# Doom Scroll Blocker - System Patterns

## Architecture Overview
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   UI Layer      │    │  Business Logic  │    │   Data Layer    │
│                 │    │                  │    │                 │
│ - Screens       │◄──►│ - Usage Tracker  │◄──►│ - AsyncStorage │
│ - Components    │    │ - Timer Engine   │    │ - State Store   │
│ - Navigation    │    │ - Notification   │    │ - Analytics     │
│                 │    │   Scheduler      │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Core System Patterns

### 1. Usage Tracking Pattern
```javascript
// Usage Tracker Service
class UsageTracker {
  - startSession(appName)
  - endSession(appName)
  - getActiveSession()
  - calculateUsageTime()
  - detectSocialMediaApps()
}
```

### 2. Intervention Pattern
```javascript
// Intervention Engine
class InterventionEngine {
  - scheduleIntervention(interval)
  - triggerIntervention(type)
  - dismissIntervention()
  - logInterventionResponse()
}
```

### 3. Notification Pattern
```javascript
// Notification Service
class NotificationService {
  - scheduleNotification(time, content)
  - sendImmediateNotification(content)
  - handleNotificationResponse()
  - updateNotificationSettings()
}
```

## Component Architecture

### Screen Components
- **HomeScreen**: Dashboard with usage stats and controls
- **SettingsScreen**: Configuration and preferences
- **InterventionScreen**: Full-screen intervention display
- **StatsScreen**: Usage analytics and insights

### Service Components
- **UsageTracker**: Monitors app usage patterns
- **TimerEngine**: Manages intervention timing
- **NotificationService**: Handles system notifications
- **StorageService**: Data persistence and retrieval
- **AnalyticsService**: Usage pattern analysis

### UI Components
- **CyberpunkButton**: Neon-styled interactive elements
- **StatsCard**: Data visualization components
- **InterventionModal**: Full-screen intervention overlay
- **ProgressBar**: Usage time visualization

## Data Flow Patterns

### Usage Monitoring Flow
1. **App Detection** → Identify social media app launch
2. **Session Start** → Begin timing session
3. **Background Check** → Periodic usage validation
4. **Intervention Trigger** → Schedule notification at threshold
5. **Session End** → Record usage data

### Intervention Flow
1. **Timer Expiry** → 15-20 minute threshold reached
2. **Notification Send** → System notification with action
3. **User Response** → Dismiss or engage with intervention
4. **Data Logging** → Record intervention effectiveness
5. **Pattern Update** → Adjust future timing based on response

## State Management Patterns

### Global State Structure
```javascript
{
  user: {
    preferences: {},
    settings: {},
    goals: {}
  },
  usage: {
    currentSession: {},
    history: [],
    patterns: {}
  },
  interventions: {
    schedule: [],
    history: [],
    effectiveness: {}
  }
}
```

### Context Providers
- **UserContext**: User preferences and settings
- **UsageContext**: Current usage session and history
- **InterventionContext**: Intervention scheduling and history

## Design Patterns

### Observer Pattern
- Usage tracking events
- Intervention triggers
- State change notifications

### Strategy Pattern
- Different intervention types (breathing, questions, stats)
- Various notification styles
- Platform-specific implementations

### Factory Pattern
- Intervention content creation
- Notification building
- Analytics report generation

## Error Handling Patterns

### Graceful Degradation
- Background task failures → Fallback to app-based tracking
- Notification permissions → In-app interventions
- Storage failures → In-memory state management

### Recovery Mechanisms
- Session restoration after app restart
- Notification rescheduling after device reboot
- Data backup and restoration

## Performance Patterns

### Lazy Loading
- Analytics data loading
- Historical usage data
- Intervention content

### Background Optimization
- Minimal background processing
- Efficient data synchronization
- Battery-conscious scheduling
