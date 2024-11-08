import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './HistoryStyle';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import OctICON from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const History = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    const zoe = require('../../../assets/zoe.jpg')

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Histórico do Pet</Text>
                </View>
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Vaccine")}>
                    <IoICON name='close-circle-outline' size={32} style={styles.topLeftIcon} color="white" />
                    <Image
                        source={zoe}
                        style={styles.petImage}
                    />
                    <Text style={styles.petName}>Zoe</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewHistory')}>
                <Text style={styles.addText}>Adicionar Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Consultation')}>
                <Text style={styles.addText}>Consultas</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.tabBar}>
                <AntICON name='home' size={50} style={getTabIconStyle('Home')} marginTop={18} onPress={() => navigation.navigate('Home')} color="white" />
                <IoICON name='paw-outline' size={50} style={getTabIconStyle('Pet')} marginTop={18} onPress={() => navigation.navigate('Pet')} color="white" />
                <FeatherICON name='message-circle' size={50} style={getTabIconStyle('Notifications')} marginTop={18} onPress={() => navigation.navigate('Notifications')} color="white" />
                <OctICON name='gear' size={50} style={getTabIconStyle('Settings')} marginTop={18} onPress={() => navigation.navigate('Settings')} color="white" />
            </SafeAreaView>
        </LinearGradient>
    );
}

export default History;