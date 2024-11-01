import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

const Data = [
  {
    day: 'Sun',
    date: '1'
  },
  {
    day: 'Mon',
    date: '2'
  },
  {
    day: 'Tue',
    date: '3'
  },
  {
    day: 'Wed',
    date: '4'
  },
  {
    day: 'Thur',
    date: '5'
  },
  {
    day: 'Fri',
    date: '6'
  },
  {
    day: 'Sat',
    date: '7'
  },
  
]

const Banner = () => {
  return (
    <View>
        {/* <View style={{
        }}>
          <Image source={require('./../assets/images/img04.png')}
          style={{
            width: '100%',
            height: '65%'
          }}
          />
        </View> */}
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: 10,
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 30,
            color: 'gray',
            marginHorizontal: 10
          }}>October 13</Text>
          <Text style={{
            fontSize: 20,
            marginBottom: 5,
            marginHorizontal: 10
          }}>Today's reminders</Text>
          <FlatList
          data={Data}
          contentContainerStyle={{
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            marginHorizontal: 10
          }}
          renderItem={({item, index}) =>(
            <View key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                color: 'gray',
              }}>{item.day}</Text>
              <Text style={{
                fontSize: 25,
                marginTop:5
              }}>{item.date}</Text>
           </View>
          )}
          />
        </View>
    </View>
  )
}

export default Banner