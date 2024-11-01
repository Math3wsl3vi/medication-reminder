import { View, Text } from 'react-native'
import React from 'react'
import ProfileIntro from '@/components/ProfileIntro'
import MyMedication from '@/components/MyMedication'
import Appointment from '@/components/Appointment'

const profile = () => {
  return (
    <View>
      <ProfileIntro/>
      <MyMedication/>
      <Appointment/>
    </View>
  )
}

export default profile