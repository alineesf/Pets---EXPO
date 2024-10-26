import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Switch
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons'
import styles from './SecurityStyle';
import { useNavigation } from '@react-navigation/native';

const SecurityPage = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Segurança</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <IoICON name="chevron-back-outline" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Acesso ao app</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Solicitar biometria ou senha para acessar o app</Text>
                    <Switch
                        thumbColor={isEnabled ? '#490092' : '#490092'}
                        trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                        style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text style={styles.sectionTitle}>Alterar senha de acesso</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Utilizada para acessar sua conta</Text>
                    <AntICON name="right" size={35} color="#bdbebd" />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SecurityPage;