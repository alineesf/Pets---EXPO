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
import styles from './VaccineStyle';
import IoICON from 'react-native-vector-icons/Ionicons';
import FontistoICON from 'react-native-vector-icons/Fontisto';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { CheckBox } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

const Vaccine = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [userData, setUserData] = useState(null);
    const [login, setLogin] = useState(null)
    const [selectedSpecies, setSelectedSpecies] = useState('Felino');
    const [isCheckedFemea, setIsCheckedFemea] = useState(false);
    const [isCheckedMacho, setIsCheckedMacho] = useState(false);
    const [telephone, setTelephone] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const vaccine = require('../../../assets/vaccine.png');
    const upload = require('../../../assets/upload.png');


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
                        >Carteira de Vacina</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <View style={styles.rectangle}>
                        <Text style={styles.text}>Anexar Vacina</Text>
                        <View style={styles.rectangleVaccine}>
                            <Image
                                source={vaccine}
                                style={styles.vaccineImage}
                            />
                            <View style={styles.line} />
                            <IoICON name="trash-outline" 
                            size={40} 
                            color="white"
                            alignSelf={'flex-end'}
                            marginTop={20}
                            marginRight={20}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Data de Vacina       28/03/2024</Text>
                            <FontistoICON
                                name="date" 
                                size={40} 
                                color="white" 
                                style={styles.icon}
                                marginLeft={30}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Próxima Vacina       28/03/2024</Text>
                            <FontistoICON
                                name="date" 
                                size={40} 
                                color="white" 
                                style={styles.icon}
                                marginLeft={30}
                            />
                        </View>
                        <View style={styles.line2} />
                        <Text style={styles.text}>Anexar Vacina</Text>
                        <View style={styles.rectangleVaccine}>
                            <Image
                                source={upload}
                                style={styles.vaccineImage}
                            />
                            <View style={styles.line} />
                            <IoICON name="trash-outline" 
                            size={40} 
                            color="white"
                            alignSelf={'flex-end'}
                            marginTop={20}
                            marginRight={20}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Data de Vacina       _    /    _    /    _</Text>
                            <FontistoICON
                                name="date" 
                                size={40} 
                                color="white" 
                                style={styles.icon}
                                marginLeft={30}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Próxima Vacina       _    /    _    /    _</Text>
                            <FontistoICON
                                name="date" 
                                size={40} 
                                color="white" 
                                style={styles.icon}
                                marginLeft={30}
                            />
                        </View>
                    </View>
                    <View style={styles.rectangleVermifuge}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textVermifuge}>Vermífugo</Text>
                            <Text marginTop={20} style={styles.textVermifuge}>Data: 28/08/2023</Text>
                            <Text marginTop={20} style={styles.textVermifuge}>Reforço: 28/11/2023</Text>
                        </View>
                        <View style={styles.rectangleVermifuge2}>
                            <Image
                                marginTop={10}
                                source={vaccine}
                                style={styles.vaccineImage}
                            />
                            <View style={styles.line} />
                            <IoICON name="trash-outline" 
                            size={20} 
                            color="white"
                            alignSelf={'flex-end'}
                            marginTop={20}
                            marginRight={20}
                            marginBottom={20}
                            />
                        </View>
                    </View>
                    <View style={styles.rectangleVermifuge}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textVermifuge}>Vermífugo</Text>
                            <Text marginTop={20} style={styles.textVermifuge}>Data: 28/08/2023</Text>
                            <Text marginTop={20} style={styles.textVermifuge}>Reforço: 28/11/2023</Text>
                        </View>
                        <View style={styles.rectangleVermifuge2}>
                            <Image
                                marginTop={10}
                                source={upload}
                                style={styles.vaccineImage}
                            />
                            <View style={styles.line} />
                            <IoICON name="trash-outline" 
                            size={20} 
                            color="white"
                            alignSelf={'flex-end'}
                            marginTop={20}
                            marginRight={20}
                            marginBottom={20}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Vaccine;