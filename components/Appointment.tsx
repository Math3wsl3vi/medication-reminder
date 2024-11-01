import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Doctor = [
  {
    id: 1,
    name: 'Levi Mathews',
    date: '10th June',
    time: '10:00 am',
    daysLeft: 10
  },
  {
    id: 2,
    name: 'Mevi Lathews',
    date: '20th June',
    time: '9:00 am',
    daysLeft: 10
  },
  {
    id: 3,
    name: 'Levi Mathews',
    date: '10th June',
    time: '10:00 am',
    daysLeft: 20
  },

]

const Appointment = () => {
  const router = useRouter();
  return (
    <>
    <View>
      <Text style={{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
      }}>My Appointments</Text>
    </View>
  <FlatList 
   data={Doctor}
   contentContainerStyle={{
    display: 'flex',
    gap: 10
   }}
   renderItem={({item, index})=> {
    const backgroundColor = item.id % 2 === 0 ? '#f0fff0': '#e0f7fa';
    const color = item.daysLeft <= 10 ? 'red' : 'green';
    return(
    <TouchableOpacity key={index}
    onPress={()=> router.push('/medicine')}
    style={{
      backgroundColor,
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10
      
    }}
    >
      <Text style={{
        color: 'gray',
        fontSize: 20
      }}>{item.name}</Text>
      <Text style={{
        fontSize:18,
      }}>{item.date}</Text>
      <Text>{item.time}</Text>
      <Text style={{
        color,
        position:'absolute',
        bottom: 5,
        right: 10,
        fontWeight:600
      }}>{item.daysLeft} days left</Text>

    </TouchableOpacity>
   )}}
  />
  </>
   
  )
}

export default Appointment