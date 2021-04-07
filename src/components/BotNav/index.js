import { Icon } from "native-base";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import normalize from "react-native-normalize";
import { useEffect } from "react";
import HomeScreen from "../../pages/Home";
import Message from "../../pages/Message";
import Notification from "../../pages/Notification";
import Account from "../../pages/Account";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function BotNav() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#299BD7" }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="home"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarLabel: "Pesan",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="envelope-open-text"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Pemberitahuan",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="bell"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="UserAccount"
          component={Account}
          options={{
            tabBarLabel: "Akun",
            tabBarIcon: ({ color }) => (
              <Icon
                type="FontAwesome5"
                name="user-circle"
                color={color}
                style={{ fontSize: normalize(25) }}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
