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
import styles from './NewHistoryStyle';
import IoICON from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

const NewHistory = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [userData, setUserData] = useState(null);
    const [login, setLogin] = useState(null)
    const [selectedSpecies, setSelectedSpecies] = useState('Felino');
    const [isCheckedFemea, setIsCheckedFemea] = useState(false);
    const [isCheckedMacho, setIsCheckedMacho] = useState(false);
    const [telephone, setTelephone] = useState("");

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
                        >Histórico Pet</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <Image
                        source={userData && userData.profileImage ? { uri: `http://192.168.99.35:5001/${userData.profileImage.replace(/\\/g, '/')}` } : profilePick}
                        style={styles.profileAvatar}
                    />
                    <Text style={styles.label}>*Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Safira'
                        value={login}
                        onChangeText={setLogin}
                    />
                    <View style={styles.rowContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelDuo}>*Data nascimento</Text>
                                <TextInput
                                    style={styles.inputDuo}
                                    placeholder='01//01/2000'
                                    secureTextEntry={true}
                                />
                            </View>
                        <View style={styles.inputContainer}>
                        <Text style={styles.labelDuo}>*Ano nascimento</Text>
                        <TextInput
                            style={styles.inputDuo}
                            placeholder='2000'
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
                        placeholder='Digite a raça do pet'
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
                    <Text 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                    >Histórico Clínico</Text>
                    <Text style={styles.labelOBS}>*Uso de Medicação contínua:</Text>
                    <View style={styles.row}>
                        <CheckBox
                            title="Sim"
                            checked={isCheckedFemea}
                            onPress={() => setIsCheckedFemea(!isCheckedFemea)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                        <CheckBox
                            title="Não"
                            checked={isCheckedMacho}
                            onPress={() => setIsCheckedMacho(!isCheckedMacho)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                    </View>
                    <TextInput
                        style={styles.inputOBS}
                        placeholder='...'
                        value={login}
                        onChangeText={setLogin}
                        multiline={true}
                    />
                    <Text style={styles.labelOBS}>*Realizou Cirurgias:</Text>
                    <View style={styles.row}>
                        <CheckBox
                            title="Sim"
                            checked={isCheckedFemea}
                            onPress={() => setIsCheckedFemea(!isCheckedFemea)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                        <CheckBox
                            title="Não"
                            checked={isCheckedMacho}
                            onPress={() => setIsCheckedMacho(!isCheckedMacho)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                    </View>
                    <TextInput
                        style={styles.inputOBS}
                        placeholder='...'
                        value={login}
                        onChangeText={setLogin}
                        multiline={true}
                    />
                    <Text style={styles.labelOBS}>*Alergia a medicamentos:</Text>
                    <View style={styles.row}>
                        <CheckBox
                            title="Sim"
                            checked={isCheckedFemea}
                            onPress={() => setIsCheckedFemea(!isCheckedFemea)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                        <CheckBox
                            title="Não"
                            checked={isCheckedMacho}
                            onPress={() => setIsCheckedMacho(!isCheckedMacho)}
                            containerStyle={styles.checkboxContainerOBS}
                            textStyle={styles.checkboxText}
                        />
                    </View>
                    <TextInput
                        style={styles.inputOBS}
                        placeholder='...'
                        value={login}
                        onChangeText={setLogin}
                        multiline={true}
                    />
                     <Text style={styles.labelOBS}>*Comportamento:</Text>
                     <TextInput
                        style={styles.inputOBS}
                        placeholder='...'
                        value={login}
                        onChangeText={setLogin}
                        multiline={true}
                    />
                    <Text style={styles.labelOBS}>*Ambiente:</Text>
                     <TextInput
                        style={styles.inputOBS}
                        placeholder='...'
                        value={login}
                        onChangeText={setLogin}
                        multiline={true}
                    />
                    <Text style={styles.labelOBS}>*Contatos Emergência:</Text>
                    <Text style={styles.label}>Médico Veterinário</Text>
                    <View style={styles.inputContainerTelephone}>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99)',
                        }}
                        style={styles.inputTelephone}
                        placeholder='+00 (  ) 00000-0000'
                        placeholderTextColor={'#0C91FF'}
                        value={telephone}
                        onChangeText={setTelephone}
                    />
                    <Image
                        source={require('../../../assets/sirene.png')}
                        style={styles.icon}
                        />
                    </View>
                    <Text style={styles.label}>Tutora da Zoe</Text>
                    <View style={styles.inputContainerTelephone}>
                    <TextInputMask
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99)',
                        }}
                        style={styles.inputTelephone}
                        placeholder='+00 (  ) 00000-0000'
                        placeholderTextColor={'#0C91FF'}
                        value={telephone}
                        onChangeText={setTelephone}
                    />
                    <Image
                        source={require('../../../assets/sirene.png')}
                        style={styles.icon}
                        />
                    </View>
                    <Text style={styles.label}>*Imagens e Arquivos:</Text>
                    <View style={styles.AddContainerOptions}>
                        <TouchableOpacity style={styles.AddOptions} onPress={() => {/* ação ao tocar */}}>
                            <Text style={styles.optionText}>ANEXAR ARQUIVO</Text>
                            <Image
                                source={require('../../../assets/anexar.png')}
                                style={styles.iconOptions}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>*Consultas:</Text>
                    <View style={styles.AddContainerOptions}>
                        <TouchableOpacity style={styles.AddOptions} onPress={() => {/* ação ao tocar */}}>
                            <Text style={styles.optionText}>ADICIONAR CONSULTA</Text>
                            <Image
                                source={require('../../../assets/consulta.png')}
                                style={styles.iconOptions}
                            />
                        </TouchableOpacity>
                    </View>




                    
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.addText}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default NewHistory;