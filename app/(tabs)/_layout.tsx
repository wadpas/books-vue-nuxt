import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView
      edges={['top']}
      style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Головна',
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                size={28}
                name='house'
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'Замовлення',
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                size={28}
                name='library-books'
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
