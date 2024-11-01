import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';

const Dawa = [
    { id: 1, name: 'Panadol', quantity: '2 tablets', presc: '2 * 3', icon: require('./../assets/images/tablet.png') },
    { id: 2, name: 'Amoxylin', quantity: '1 capsule', presc: '1 * 3', icon: require('./../assets/images/capsul.png') },
    { id: 3, name: 'Cetrizine', quantity: '10 ml', presc: '1 * 1', icon: require('./../assets/images/syrup.png') },
    // Additional items as needed
];

const getTimeSlot = (presc: string) => {
    if (presc === '1 * 3') return ['Morning', 'Afternoon', 'Evening'];
    if (presc === '1 * 1') return ['Morning'];
    if (presc === '2 * 3') return ['Morning', 'Afternoon', 'Evening'];
    return [];
};

const MedicationList = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      height: '100%',
      marginTop: 20,
      padding: 10
    }}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View style={{ width: '25%' }}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Time</Text>
          {Dawa.flatMap((item) =>
            getTimeSlot(item.presc).map((time, idx) => (
              <Text key={`${item.id}-${idx}`} style={{ fontSize: 16, marginVertical: 8 }}>{time}</Text>
            ))
          )}
        </View>
        
        <View style={{ width: '75%' }}>
          <Text style={{ fontSize: 18, color: 'gray' }}>Medication</Text>
          {Dawa.map((item) => {
            const timeSlots = getTimeSlot(item.presc);
            return timeSlots.map((time, idx) => (
              <View key={`${item.id}-${idx}`} style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: item.icon === require('./../assets/images/tablet.png') ? '#f0fff0' 
                              : item.icon === require('./../assets/images/capsul.png') ? '#e0f7fa' 
                              : item.icon === require('./../assets/images/syrup.png') ? '#fce4ec' 
                              : '#ffffff',
                padding: 10,
                marginVertical: 5,
                borderRadius: 8
              }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.name}</Text>
                  <Text style={{ fontSize: 15, color: 'gray' }}>{item.quantity}</Text>
                </View>
                <View style={{ borderWidth: 1, padding: 2, borderRadius: 8 }}>
                  <Image source={item.icon} style={{ width: 40, height: 40 }} />
                </View>
              </View>
            ));
          })}
        </View>
      </View>
    </View>
  );
}

export default MedicationList;
