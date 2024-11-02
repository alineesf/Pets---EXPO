import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import styles from './LoginStyle';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('../../assets/logo.png');
const google = require('../../assets/google.png');
const facebook = require('../../assets/facebook.png');
const DOOR = require('../../assets/opendoor.png');
const loadingGif = require('../../assets/gifCAT.gif');

const Login = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [activeTab, setActiveTab] = useState('Login');
  const [animation, setAnimation] = useState('fadeInRight');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Carregando');

  const handleRememberMeToggle = () => {
    setRememberMe(previousState => !previousState);
  };

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setAnimation(tab === 'Login' ? 'fadeInRight' : 'fadeInLeft');
      setActiveTab(tab);
    }
  };

  const isValidDate = (dateString) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    
    if (!regex.test(dateString)) {
      return false;
    }
  
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
  
    const date = new Date(year, month - 1, day);
    
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  };

  const handleSignUp = () => {
    
    if (!username || !phoneNumber || !email || !birthday || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
  
    if (!isValidDate(birthday)) {
      Alert.alert('Erro', 'Data de nascimento deve estar no formato DD/MM/YYYY');
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não correspondem!');
      return;
    }
  
    const [day, month, year] = birthday.split('/');
    const isoDate = new Date(`${year}-${month}-${day}T00:00:00Z`); 
  
    const formData = new FormData();
    formData.append('username', username);
    formData.append('telephone', phoneNumber);
    formData.append('email', email);
    formData.append('birthday', birthday);
    formData.append('password', password);
  
    axios
      .post('https://bppbackend.onrender.com/SignUpForm', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        if (res.data.status === 'ok') {
          Alert.alert('Sucesso', 'Cadastro efetuado com sucesso!');
          setTimeout(() => {
            navigation.navigate('Login');
          }, 1000);
        } else {
          Alert.alert('Erro', res.data.data || 'Usuário já existente!');
        }
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Tente novamente.');
      });
  };

  const handleSubmit = () => {
    if (!login || !password) {
      Alert.alert('Error', 'Por favor, preencha todos os campos!');
      return;
    }

    const userData = { email: login, password: password };

    setLoading(true);

    axios.post('https://bppbackend.onrender.com/LoginForm', userData)
      .then(res => {
        if (res.data.status === 'ok') {
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
          if (res.data.userType) {
            AsyncStorage.setItem('userType', res.data.userType);
          } else {
            AsyncStorage.removeItem('userType');
          }
          
          return new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          Alert.alert('Login Failed', 'Email ou senha inválidos!');
          setPassword('');
          throw new Error('Login failed');
        }
      })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Ocorreu um erro,', 'por favor, tente novamente mais tarde!');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingText((prev) => (prev === 'Carregando...' ? 'Carregando' : prev + '.'));
      }, 500);
    } else {
      setLoadingText('Carregando');
    }

    return () => clearInterval(interval);
  }, [loading]);

  const formatBirthday = (text) => {
    const cleanText = text.replace(/\D/g, '');
  
    const formattedText = cleanText
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2') 
      .substring(0, 10);
  
    return formattedText;
  };

  return (
    <LinearGradient colors={['#9C51FD', '#2B1240']} style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Image source={loadingGif} style={styles.loadingGif} />
            <Text style={styles.loadingText}>{loadingText}</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Image 
              source={activeTab === 'Login' ? logo : DOOR} 
              style={styles.image} 
              resizeMode='contain' 
            />
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'Login' && styles.activeTab]}
                onPress={() => handleTabChange('Login')}>
                <Text style={[styles.textChange, activeTab === 'Login' && styles.activeTabText]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'phoneNumber' && styles.activeTab]}
                onPress={() => handleTabChange('phoneNumber')}>
                <Text style={[styles.textChange, activeTab === 'phoneNumber' && styles.activeTabText]}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
            <Animatable.View animation={animation} duration={1000}>
              {activeTab === 'Login' ? (
                <>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={login}
                    onChangeText={setLogin}
                  />
                  <Text style={styles.label}>Senha</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <View style={styles.rememberMe}>
                    <View style={styles.switch}>
                      <Switch value={rememberMe}
                        onValueChange={handleRememberMeToggle}
                        thumbColor={rememberMe ? '#9C51FD' : '#9C51FD'}
                        trackColor={{ false: 'white', true: 'white' }}
                        style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }} />
                      <Text style={styles.rememberText}>Manter Conectado</Text>
                    </View>
                    <View>
                      <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgetText}>Esqueceu a senha?</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.optionsText}>------------------------  OU  ------------------------</Text>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='Ana'
                    value={username}
                    onChangeText={setUsername}
                  />
                  <Text style={styles.label}>Telefone</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='(48)91234-5678'
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder='ana@gmail.com'
                    value={email}
                    onChangeText={setRegisterEmail}
                  />
                  <Text style={styles.label}>Data de Nascimento</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    value={birthday}
                    onChangeText={(text) => setBirthday(formatBirthday(text))}
                    keyboardType="numeric"
                  />
                  <Text style={styles.label}>Senha</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <Text style={styles.label}>Confirmar Senha</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="********"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <View>
                    <Text style={styles.optionsText}>------------------------    OU  ------------------------  </Text>
                  </View>
                </>
              )}
              <View style={styles.mediaIcons}>
                <Pressable onPress={() => Alert.alert("Login com Google")}>
                  <Image source={google} style={styles.icons} />
                </Pressable>
                <Pressable onPress={() => Alert.alert("Login com Facebook")}>
                  <Image source={facebook} style={styles.icons} />
                </Pressable>
              </View>
              <TouchableOpacity 
                style={styles.signInButton}
                onPress={activeTab === 'Login' ? handleSubmit : handleSignUp}
              >
                <Text style={styles.signInButtonText}>{activeTab === 'Login' ? 'Entrar' : 'Cadastrar'}</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

export default Login;