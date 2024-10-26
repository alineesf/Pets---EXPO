import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './SettingsStyle';
import MatICON from 'react-native-vector-icons/MaterialCommunityIcons';
import MatICON2 from 'react-native-vector-icons/MaterialIcons'
import AntICON from 'react-native-vector-icons/AntDesign'
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import AweICON5 from 'react-native-vector-icons/FontAwesome5';
import OctICON from 'react-native-vector-icons/Octicons';
import FonICON from 'react-native-vector-icons/Fontisto'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    const handleLogout = () => {
        Alert.alert(
          'Confirmação',
          'Tem certeza que deseja sair?',
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', onPress: () => confirmLogout() },
          ],
          { cancelable: false }
        );
      };
    
      const confirmLogout = async () => {
        await AsyncStorage.removeItem('token');
        navigation.navigate('Login');
      };

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Configurações</Text>
                </View>

                <Text style={styles.sectionTitle}>Conta</Text>
                <View style={styles.accountBox}>
                    <TouchableOpacity onPress={() => navigation.navigate('SecurityPage')}>
                        <View style={styles.lineItem}>
                            <MatICON name="security" size={20} color="#000" />
                            <Text style={styles.lineText}>Segurança</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <View style={styles.lineItem}>
                            <IoICON name="notifications-outline" size={20} color="#000" />
                            <Text style={styles.lineText}>Notificações</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Privacity')}>
                        <View style={styles.lineItem}>
                            <FonICON name="locked" size={20} color="#000" />
                            <Text style={styles.lineText}>Privacidade</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sectionTitle}>Apoio & Sobre</Text>
                <View style={styles.accountBox}>
                    <View style={styles.lineItem}>
                        <FeatherICON name="credit-card" size={20} color="#000" />
                        <Text style={styles.lineText}>Minha assinatura</Text>
                    </View>
                    <View style={styles.lineItem}>
                        <AntICON name="questioncircleo" size={20} color="#000" />
                        <Text style={styles.lineText}>Ajuda e Suporte</Text>
                    </View>
                    <View >
                    <TouchableOpacity style={styles.lineItem} onPress={() => navigation.navigate('Terms')}>
                        <AweICON5 name="info-circle" size={20} color="#000" />
                        <Text style={styles.lineText}>Termos e Políticas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.sectionTitle}>Ações</Text>
                <View style={styles.accountBoxSmall}>
                    <View style={styles.lineItem}>
                        <MatICON2 name="report-problem" size={20} color="#000" />
                        <Text style={styles.lineText}>Reportar problema</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={handleLogout} style={styles.lineItem}>
                            <IoICON name="exit-outline" size={20} color="#000" />
                            <Text style={styles.lineText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tabBar}>
                <AntICON name='home' size={50} style={getTabIconStyle('Home')} marginTop={18} onPress={() => navigation.navigate('Home')} color="white" />
                <IoICON name='paw-outline' size={50} style={getTabIconStyle('Pet')} marginTop={18} onPress={() => navigation.navigate('Pet')} color="white" />
                <FeatherICON name='message-circle' size={50} style={getTabIconStyle('Notifications')} marginTop={18} onPress={() => navigation.navigate('Notifications')} color="white" />
                <OctICON name='gear' size={50} style={getTabIconStyle('Settings')} marginTop={18} onPress={() => navigation.navigate('Settings')} color="white" />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Settings;
