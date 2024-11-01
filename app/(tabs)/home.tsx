import Banner from '@/components/Banner';
import Header from '@/components/Header';
import MedicationList from '@/components/MedicationList';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
<>
<Header/>
<Banner/>
<MedicationList/>
</>
  );
}


