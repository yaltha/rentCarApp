import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { Icon } from 'react-native-elements'
import { TabNavigatorParamsList } from "../types";

import { Account, Home, Cars, Rent } from "../screens";

const TabStack = createBottomTabNavigator<TabNavigatorParamsList>();

interface TabContainerProps {
  label?: string;
  focused?: boolean;
}

const TabContainer: React.FunctionComponent<TabContainerProps> = ({
  children,
  label,
  focused,
}) => (
  <>
    {focused ? (
      <View
        style={{
          borderTopColor: "#31aab7",
          alignItems: "center",
          flex: 1,
          paddingTop: 17,
        }}
      >
        {children}
        <Text
          style={{
            color: "#0f0f0f",
            marginTop: 7,
          }}
        >
          {label}
        </Text>
      </View>
    ) : (
      <View
        style={{ width: "100%", alignItems: "center", flex: 1, paddingTop: 17 }}
      >
        {children}
        <Text style={{ color: "#acbac3", marginTop: 6 }}>{label}</Text>
      </View>
    )}
  </>
);

const TabNavigator = () => {
  const { Navigator, Screen } = TabStack;
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
          backgroundColor: "#ffc100",
          borderColor: "rgba(0,0,0,0)",
        },
      }}
      screenOptions={({route})=>({
        tabBarIcon: ({focused}) => {
          let label,iconName: string
          
          switch (route.name) {
            case 'Home':
              label = 'Home'
              iconName = 'home'
              break;
            case 'Cars':
              label = 'Cars'
              iconName = 'car'
              break;
            case 'Rent':
              label = 'Rent'
              iconName = 'key'
              break;
            case 'Account':
              label = 'Me'
              iconName = 'user-alt'
              break;
            default:
              return null;
          }
          return (
            <TabContainer
              label={label}
              focused={focused}
            >
              <Icon
                type = 'font-awesome-5'
                name = {iconName}
                color = {focused ? '#0f0f0f' : '#acbac3'}
              />
            </TabContainer>
          )
        }
      })}
    >
      {/*     
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarLabel: "Cars",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Rent"
        component={Rent}
        options={{
          tabBarLabel: "Rent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-key" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
       */}
      <Screen name="Home" component={Home} />
      <Screen name="Cars" component={Cars} />
      <Screen name="Rent" component={Rent} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

export default TabNavigator;
