import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Device from 'expo-device';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebaseApp from './Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

// SCREENS
import HomeScreen from './screens/HomeScreen';
import TranslatorScreen from './screens/TranslatorScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';


const Stack = createNativeStackNavigator();

const auth = getAuth(); // Firebase auth

export default function App() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {
      // Checar si el usuario ya esta logeado
      // y actualizar el estado de authenticated de acuerdo a eso
      return onAuthStateChanged(auth, (user) => {
        if (user) { setAuthenticated(true) }
        else { setAuthenticated(false) }
  
        setLoading(false);
      });
    }, []);

    // Obtener el modelo del dispositivo
    const deviceModel = Device.modelName;

    // Esto es para cargar las fuentes
    // Tiene lo de deviceModel porque en ese modelo de celular las fuentes se ven diferentes
    // Entonces si detecta que esta en ese modelo carga las fuentes diferentes
    let [fontsLoaded] = deviceModel == "SM-A705MN" ? 
    useFonts({
      Light: Poppins_300Light,
      Regular: Poppins_400Regular,
      Medium: Poppins_500Medium,
      SemiBold: Poppins_600SemiBold,
      Bold: Poppins_700Bold,
    }) :
    useFonts({
      Light: Poppins_300Light,
      Regular: Poppins_400Regular,
      Medium: Poppins_600SemiBold,
      SemiBold: Poppins_700Bold,
      Bold: Poppins_800ExtraBold,
    });


  if (!fontsLoaded) {
    // Si las fuentes no han cargado mostrar la pantalla de carga
    return <AppLoading />;
  } else {

    if(loading) {
      // Esperar a que la aplicacion obtenga el usuario de firebase
      // Si esta cargando mostrar la pantalla de carga
      return <AppLoading />;
    }

    // Si no hay ningun usuario logueado mostrar la pantalla de login
    if(!authenticated) {
      return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Post" component={PostScreen} />
              <Stack.Screen name="Translator" component={TranslatorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      );
    }

    // Si hay un usuario logueado mostrar la pantalla de home
    return (
      <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Post" component={PostScreen} />
              <Stack.Screen name="Translator" component={TranslatorScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
