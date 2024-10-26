import React, { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './RegisterStyle';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import OctICON from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements';

const Register = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [userData, setUserData] = useState(null);
    const [login, setLogin] = useState(null)
    const [selectedSpecies, setSelectedSpecies] = useState('Felino');
    const [isCheckedFemea, setIsCheckedFemea] = useState(false);
    const [isCheckedMacho, setIsCheckedMacho] = useState(false);

    const profilePick = require('../../../assets/profilepickPET.jpg');

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    return (
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.header}>
                        <Text 
                        style={styles.headerText}
                        paddingRight={25}
                        >Cadastrar Pet</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <Image
                        source={userData && userData.profileImage ? { uri: `http://192.168.99.35:5001/${userData.profileImage.replace(/\\/g, '/')}` } : profilePick}
                        style={styles.profileAvatar}
                    />
                    <Text style={styles.label}>*Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Usuario@gmail.com'
                        value={login}
                        onChangeText={setLogin}
                    />
                    <View style={styles.rowContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelDuo}>*Data nascimento</Text>
                                <TextInput
                                    style={styles.inputDuo}
                                    placeholder='Digite sua senha'
                                    secureTextEntry={true}
                                />
                            </View>
                        <View style={styles.inputContainer}>
                        <Text style={styles.labelDuo}>*Ano nascimento</Text>
                        <TextInput
                            style={styles.inputDuo}
                            placeholder='Confirme sua senha'
                            secureTextEntry={true}
                        />
                        </View>
                    </View>
                    <Text style={styles.label}>*Espécie</Text>
                    <RNPickerSelect 
                        onValueChange={(value) => setSelectedSpecies(value)}
                        items={[
                        { label: 'Felino', value: 'felino' },
                        { label: 'Canino', value: 'canino' },
                        { label: 'Aves', value: 'aves' },
                        ]}
                        placeholder={{ label: 'Selecione uma espécie', value: null }}
                        alignSelf={'center'}
                        style={{
                        inputIOS: styles.inputPicker,
                        inputAndroid: styles.inputPicker,
                        }}
                    />
                    <Text style={styles.label}>*Raça</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='SRD - Sem raça definida'
                        value={login}
                        onChangeText={setLogin}
                    />
                    <View style={styles.row}>
                        <CheckBox
                            title="Fêmea"
                            checked={isCheckedFemea}
                            onPress={() => setIsCheckedFemea(!isCheckedFemea)}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                        <CheckBox
                            title="Macho"
                            checked={isCheckedMacho}
                            onPress={() => setIsCheckedMacho(!isCheckedMacho)}
                            containerStyle={styles.checkboxContainer}
                            textStyle={styles.checkboxText}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelDuo} marginTop={30}>*Peso</Text>
                                <TextInput
                                    style={styles.inputDuo}
                                    placeholder='2 kg'
                                    secureTextEntry={true}
                                />
                            </View>
                        <View style={styles.inputContainer}>
                        <Text style={styles.labelDuo} marginTop={30}>*Tipo sanguíneo</Text>
                        <TextInput
                            style={styles.inputDuo}
                            placeholder='Não identificado'
                            secureTextEntry={true}
                        />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.addText}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Register;