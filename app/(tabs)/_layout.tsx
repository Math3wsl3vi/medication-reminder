import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color="black"  /> 
          ),
        }}
      />
      <Tabs.Screen
        name="myReminders"
        options={{
          title: 'My Rreminders',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="bell" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          title: 'Calender',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="calendar" size={24} color="black" />
          ),
        }}
      />
        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
