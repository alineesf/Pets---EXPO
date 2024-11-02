import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Switch,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './ProfileStyle';

const Profile = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const [userData, setUserData] = useState(null);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const profilePick = require('../../assets/Profile-pick.png');

    useEffect(() => {
        const getData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                const response = await axios.post('http://192.168.15.9:5001/userdata', { token: token });
                setUserData(response.data.data);
            } catch (error) {
                console.error(error);
                Alert.alert('Erro', 'Ocorreu um erro ao obter dados do usuário. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Perfil</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <Image
                        source={userData && userData.profileImage ? { uri: `http://192.168.15.9:5001/${userData.profileImage.replace(/\\/g, '/')}` } : profilePick}
                        style={styles.profileAvatar}
                    />
                    <Text style={styles.label}>*Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Usuario@gmail.com'
                        value={login}
                        onChangeText={setLogin}
                    />
                    
                    <Text style={styles.label}>*Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.label}>*Sobrenome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Sobrenome'
                        value={login}
                        onChangeText={setLogin}
                    />
                    
                    <Text style={styles.label}>*Telefone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="(48) 99191-9191"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.label}>*Data de nascimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='01/01/2000'
                        value={login}
                        onChangeText={setLogin}
                    />
                    
                    <Text style={styles.label}>*Endereço</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text style={styles.label}>*Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='******'
                        value={login}
                        onChangeText={setLogin}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={() => alert('Adicionar Pet')}>
                        <Text style={styles.addText}>Alterar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.navigate('Delete')}>
                        <Text style={styles.deleteText}>Excluir conta</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Profile;