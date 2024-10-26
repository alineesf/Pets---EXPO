import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Switch,
    StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './PrivacityStyle';

const Privacity = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View 
                    style={styles.header}
                    paddingRight={25}
                    >
                        <Text style={styles.headerText}>Privacidade</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <Text 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                    >Permissões</Text>

                    <Text style={styles.sectionTitle}>Avisos Promocionais</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Conceda permissão de localização para melhorar sua experiência e fornecer serviços personalizados.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Acesso a camera e galeria</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Permita o acesso à câmera para aproveitar ao máximo nossos recursos.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Acesso a rede local</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Conceda permissão para acessar a rede local e desfrutar de uma conexão otimizada.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Informações do dispositivo </Text>
                    <View 
                    style={styles.switchContainer}
                    paddingBottom={60}
                    >
                        <Text style={styles.switchText}>Solicitamos permissão para acesso às informações do dispositivo, a fim de personalizar sua experiência e garantir a compatibilidade ideal.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Privacity;