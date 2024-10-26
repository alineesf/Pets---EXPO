import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './TermsStyle';
import AntICON from 'react-native-vector-icons/AntDesign';
import IoICON from 'react-native-vector-icons/Ionicons';
import FeatherICON from 'react-native-vector-icons/Feather';
import OctICON from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Terms = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const getTabIconStyle = (tabName) => {
        return route.name === tabName ? styles.tabIconActive : styles.tabIcon;
    };

    return(
        <LinearGradient
        colors={['#9C51FD', '#2B1240']}
        style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Termos de Política</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <IoICON name="chevron-back-outline" size={40} color="white" />
                </TouchableOpacity>
                <Text 
                    style={styles.sectionMainTitle}
                    paddingRight={25}
                >Termos de Serviço e Política de Privacidade</Text>
                <View style={styles.rectangle}>
                        <Text style={styles.text}>
                        1. Cadastro e Uso do Aplicativo - Ao se cadastrar no Pet's Care, você concorda em fornecer informações verdadeiras e precisas sobre você e seus pets. Suas credenciais de login são pessoais e não devem ser compartilhadas com terceiros.{'\n'}
                    
                        2. Uso Responsável - O Pet's Care destina-se exclusivamente a fins legítimos relacionados ao cuidado de animais de estimação. O uso inadequado do aplicativo, incluindo atividades ilegais, é estritamente proibido.{'\n'}

                        3. Serviços Oferecidos{'\n'}

                        O Pet's Care oferece uma plataforma para conectar usuários a serviços de saúde, hospedagem e outros cuidados para pets. Não nos responsabilizamos pela qualidade ou disponibilidade desses serviços, atuando apenas como intermediários.{'\n'}
                        4. Privacidade e Segurança{'\n'}
                        Respeitamos sua privacidade e a segurança dos dados dos seus pets. As informações pessoais são tratadas com confidencialidade e não são compartilhadas sem seu consentimento. Consulte nossa Política de Privacidade para obter mais detalhes.
                        </Text>
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.tabBar}>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Terms;