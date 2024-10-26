import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './DeleteStyle';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import OctICON from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';

const Delete = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [isChecked, setIsChecked] = useState(false);
    

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    return(
        <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                        <Text 
                        style={styles.headerText}
                        paddingRight={25}
                        >Excluir Conta</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                        <IoICON name="chevron-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                <Text 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                >Termo de Responsabilidade de exclusão de conta</Text>
                <Text 
                style={styles.sectionText}>
                    A exclusão da Conta implica na perda irreversível de acesso a todos os dados, informações, configurações e conteúdos relacionados à Conta. {"\n"}
                    {"\n"}
                    Este processo é irreversível e a recuperação da Conta após a exclusão não será possível.{"\n"}
                    {"\n"}

                    O Usuário entende que, ao excluir a Conta, todos os seus registros, mensagens, uploads e qualquer outro tipo de conteúdo associado à Conta serão removidos permanentemente da Plataforma.
                </Text>

                <CheckBox
                    title="Li e estou ciente dos termos de exclusão de conta!"
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    containerStyle={styles.checkboxContainer}
                    textStyle={styles.checkboxText}
                />
                <Text style={styles.confirmtext}>
                Você deseja excluir sua conta mesmo assim?
                </Text>
                <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deleteButton} onPress={() => navigation.navigate('Delete')}>
                    <Text style={styles.deleteText}>Excluir conta</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tabBar}>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Delete;