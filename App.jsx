import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import { Home } from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import Pet from './pages/Pet/Pet';
import Settings from './pages/Settings/Settings';
import SecurityPage from './pages/Settings/Security/Securitypage'
import Notification from './pages/Settings/Notification/Notification'
import Privacity from './pages/Settings/Privacity/Privacity';
import Profile from './pages/Profile/Profile';
import Terms from './pages/Settings/Terms/Terms';
import Delete from './pages/Profile/DeleteAccount/Delete';
import Register from './pages/Pet/Register/Register';
import NewHistory from './pages/Pet/NewHistory/NewHistory';
import History from './pages/Pet/History/History';
import Consultation from './pages/Pet/Consultation/Consultation';
import Vaccine from './pages/Pet/Vaccine/Vaccine';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar 
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            headerTransparent: true,
            headerShown: true,
          }}
        >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
          <Stack.Screen name="Pet" component={Pet} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          <Stack.Screen name="SecurityPage" component={SecurityPage} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
          <Stack.Screen name="Privacity" component={Privacity} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
          <Stack.Screen name="Delete" component={Delete} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="NewHistory" component={NewHistory} options={{ headerShown: false }} />
          <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
          <Stack.Screen name="Consultation" component={Consultation} options={{ headerShown: false }} />
          <Stack.Screen name="Vaccine" component={Vaccine} options={{ headerShown: false }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
