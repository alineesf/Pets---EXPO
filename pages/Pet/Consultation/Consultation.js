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
import styles from './ConsultationStyle';
import IoICON from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

const Consultation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [userData, setUserData] = useState(null);
    const [login, setLogin] = useState(null)
    const [selectedSpecies, setSelectedSpecies] = useState('Felino');
    const [isCheckedFemea, setIsCheckedFemea] = useState(false);
    const [isCheckedMacho, setIsCheckedMacho] = useState(false);
    const [telephone, setTelephone] = useState("");
    const [isChecked, setIsChecked] = useState(false);

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
                        >Consultas</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <View style={styles.rectangle}>
                        <Text 
                        style={styles.sectionMainTitle}
                        >Ficha de Exame</Text>
                        <Text style={styles.label}>Clínica:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='S.O.S Animais Clínica Veterinária'
                            value={login}
                            onChangeText={setLogin}
                        />
                        <Text style={styles.label}>Veterinario(a):</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Dr.Gabriel'
                            value={login}
                            onChangeText={setLogin}
                        />
                        <Text style={styles.label}>Tipo de consulta:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Consulta geral'
                            value={login}
                            onChangeText={setLogin}
                        />
                        <View style={styles.rowContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelDuo}>Data:</Text>
                                <TextInput
                                    style={styles.inputDuo}
                                    placeholder='            /            /            '
                                    secureTextEntry={true}
                                />
                            </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.labelDuo}>Hora:</Text>
                            <TextInput
                                style={styles.inputDuo}
                                placeholder='                      :                      '
                                secureTextEntry={true}
                            />
                            </View>
                        </View>
                        <Text style={styles.label}>Código: 0802435320</Text>

                        <View style={{ height: 1, Color: 'white' }} /><View style={{ height: 1, backgroundColor: '#FFFFFF99', width: '90%', alignSelf: 'center' }} />

                        <View style={{ alignItens: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ marginRight: 60, fontSize: 16, color: 'white' }}>Paciente: Zoe</Text>
                            <Text style={{ fontSize: 16, color: 'white' }}>Espécie: Gato</Text>
                        </View>
                        <View style={{ alignItens: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ marginLeft: 35, marginRight: 60, fontSize: 16, color: 'white' }}>Raça: SRD</Text>
                            <Text style={{ fontSize: 16, color: 'white' }}>Ano Nascimento: 2020</Text>
                        </View>
                        <View style={{ alignItens: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ marginRight: 145, fontSize: 16, color: 'white' }}>Sexo: Fêmea</Text>
                        </View>
                        <View style={{ alignItens: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ marginBottom: 10, marginRight: 60, fontSize: 16, color: 'white' }}>Tutor(a): Nome Sobrenome</Text>
                        </View>
                        <View style={{ height: 1, Color: 'white' }} /><View style={{ height: 1, backgroundColor: '#FFFFFF99', width: '90%', alignSelf: 'center' }} />
                        <Text 
                        style={styles.sectionMainTitle2}
                        >Ficha de Exame</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Falta de apetite</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Diarréia</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Vômito</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Cansaço respiratório</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Secreção nasal</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Tosse</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Convulsão</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Dificuldade de locomoção</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Alterações posturais</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Fraturas</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Ectoparasitas</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Queda de pelo</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Alopecia</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Secreção ocular</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Déficit visual</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Secreção</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 5, marginLeft: 20 }}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => setIsChecked(!isChecked)}
                                containerStyle={{ padding: 0, margin: 0 }}
                            />
                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }}>Déficit de audição</Text>
                        </View>
                        <Text marginTop={20} style={styles.label}>Tipo de consulta:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='...'
                            value={login}
                            onChangeText={setLogin}
                        />
                        <Text marginTop={20} style={styles.label}>Outros:</Text>
                        <TextInput
                            style={styles.inputOBS}
                            placeholder='...'
                            value={login}
                            onChangeText={setLogin}
                            multiline={true}
                        />
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
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.addText}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Consultation;