import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const ProfileIntro = () => {
  return (
    <View style={{
        marginTop: 50
    }}>
      <View style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Image source={require('./../assets/images/img06.jpg')}
        style={{
            width: 70,
            height: 70,
            borderRadius: 99,
            borderWidth: 2,
            borderColor: Colors.primary
        }}
        />
        <Text style={{
            fontSize: 20,
            fontWeight:600
        }}>John Doe</Text>
        <Text style={{
            color: 'gray',
            fontSize: 17
        }}>johndoe@gmail.com</Text>
      </View>
    </View>
  )
}

export default ProfileIntro