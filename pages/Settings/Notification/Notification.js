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
import styles from './NotificationStyle';

const Notifications = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Text 
                        style={styles.headerText}
                        paddingRight={25}
                        >Notificações</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <Text 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                    >Notificações do app</Text>
                    <Text style={styles.sectionTitle}>Avisos Promocionais</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Permita receber avisos promocionais para acesso exclusivo a ofertas, descontos e novidades.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Desativar sons e Vibrações</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Desative sons e vibrações das notificações do aplicativo para uma experiência mais silenciosa.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Lembretes</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Ative lembretes de notificação do aplicativo para ficar sempre informado e atualizado.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text style={styles.sectionTitle}>Novidades</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Ative as notificações para receber as informações mais recentes do aplicativo.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <Text 
                    marginTop={15} 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                    >Notificações chat</Text>
                    <Text style={styles.sectionTitle}>Desativar sons e vibrações</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Desative sons e vibrações no chat para uma experiência de conversa discreta.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Text style={styles.sectionTitle}>Desativar sons e vibrações</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Desative sons e vibrações no chat para uma experiência de conversa discreta.</Text>
                        <Switch
                            thumbColor={isEnabled ? '#490092' : '#490092'}
                            trackColor={{ false: '#bdbebd', true: '#bdbebd' }}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Text 
                    marginTop={15}
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                    >Notificações do app</Text>
                    <Text style={styles.sectionTitle}>Redefinir Notificações</Text>
                    <View marginBottom={100} style={styles.switchContainer}>
                        <Text style={styles.switchText}>Utilizada para acessar sua conta</Text>
                        <AntICON name="right" size={35} color="#bdbebd" marginBottom={10}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Notifications;