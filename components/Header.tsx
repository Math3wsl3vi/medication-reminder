import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Header = () => {
  return (
   <View style={{
    paddingTop: 25,
    margin: 20
   }}>
    <Image source={require('./../assets/images/img06.jpg')}
    style={{
      width: 45,
      height:45,
      borderRadius: 99,
      borderWidth: 2,
      borderColor: Colors.primary
    }}
    />
   </View>
  )
}

export default Header