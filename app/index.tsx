import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { Redirect, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect (()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View style={{
      paddingTop: 100
    }}>
      <View style={{
        alignItems: 'center',
      }}>
        <Image source={require('./../assets/images/img05.png')} 
        style={{
          height: '73%',
          width:'100%',
          // borderRadius: 10
        }}/>
      </View>
      <View style={{
        paddingHorizontal:8,
        // marginTop:-10
        margin: 10,
        
      }}>
      <Text style={{
        fontSize: 35,
      }} >Remembering to take medication has been made simple</Text>
      <Text style={{
        fontSize: 19,
        paddingTop:5,
        color: 'gray'
      }}>Stay on track with your health—get daily reminders to take your medication right on time</Text>
      </View>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 10
      }}>
        <TouchableOpacity style={{
        }}
        onPress={()=> router.push('/home') }
        >
          <Text style={{
            color:Colors.primary,
            fontSize: 22,
            marginRight: 15
          }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

