import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Dawa = [
  {
    id: 1,
    name: 'Panadol',
    quantity: '2 tablets',
    presc: '2 * 3',
    icon: require('./../assets/images/tablet.png'),
    startDate: '10th june',
    endDate: '20th june',
    Path: '/'
},
{
    id: 2,
    name: 'Amoxylin',
    quantity: '1 capsule',
    presc: '1 * 3',
    icon: require('./../assets/images/capsul.png'),
    startDate: '10th june',
    endDate: '20th june',
    Path: '/'
},
{
    id: 3,
    name: 'Cetrizine',
    quantity: '10 ml',
    presc: '1 * 1',
    icon: require('./../assets/images/syrup.png'),
    startDate: '10th june',
    endDate: '20th june',
    Path: '/'
},

]

const MyMedication = () => {
  const router = useRouter();
  return (
    <View style={{
      display: 'flex',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 20
      }}>My Medication</Text>
      <FlatList
      data={Dawa}
      numColumns={2}
      
      contentContainerStyle={{
        gap: 10,
        paddingLeft: 25,

      }}
      renderItem={({item, index})=>{
        const backgroundColor = item.icon === require('./../assets/images/tablet.png')
        ? '#f0fff0'
        : item.icon === require('./../assets/images/capsul.png')
        ? '#e0f7fa'
        : item.icon === require('./../assets/images/syrup.png')
        ? '#fce4ec'
        : '#ffffff';


        return (
        <TouchableOpacity style={{
          borderWidth: 1,
          width: '45%',
          padding: 10,
          borderRadius: 10,
          backgroundColor,
          margin: 5
        }}
        onPress={()=> router.push('/medicine')}
        >
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{item.name}</Text>
          <Image source={item.icon}
          style={{
            width: 30,
            height: 30
          }}
          />
          </View>
          <Text>{item.presc}</Text>
          <Text>{item.quantity}</Text>
          <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
          <Text>{item.startDate}</Text>
          <Text>{item.endDate}</Text>
          </View>
        </TouchableOpacity>
      )}}
      />
    </View>
  )
}

export default MyMedication