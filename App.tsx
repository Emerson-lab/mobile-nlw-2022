import React, {useRef, useEffect} from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import * as Notifications from 'expo-notifications';

import './src/services/notificationConfig';
import { getPushNotificationToken} from "./src/services/getPushNotificationToken";
import { Subscription } from 'expo-modules-core';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

const getNotificationListener = useRef<Subscription>();
const respNotificationListener = useRef<Subscription>();

useEffect(() => {
  getPushNotificationToken();
})

useEffect(() => {
  getNotificationListener.current = Notifications
  .addNotificationReceivedListener(notification => {console.log(notification)});

  respNotificationListener.current = Notifications
  .addNotificationResponseReceivedListener(reponse => {
    console.log(reponse)
  });

  return () => {
    if(getNotificationListener. current && respNotificationListener.current) {
      Notifications.removeNotificationSubscription(getNotificationListener. current);
      Notifications.removeNotificationSubscription(respNotificationListener.current);
    }
  }
}, [])

  return (
    <Background >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </Background>
  );
}


