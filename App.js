import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import InputList from "./screens/InputList";
import SortItems from "./screens/SortItems";

import Colors from "./constants/Colors";
import GroceryContextProvider from "./store/grocery-context";
import SectionList from "./screens/SectionList";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function FinalList() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Produce" component={SectionList} />
            <Tab.Screen name="Meat" component={SectionList} />
            <Tab.Screen name="Dairy" component={SectionList} />
            <Tab.Screen name="Frozen" component={SectionList} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <GroceryContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Colors.green,
                        },
                        headerTintColor: Colors.lightTan,
                    }}
                >
                    <Stack.Screen
                        name="InputList"
                        component={InputList}
                        options={{
                            title: "Grocery List Organizer",
                        }}
                    />
                    <Stack.Screen
                        name="SortItems"
                        component={SortItems}
                        options={{
                            title: "Sort Items",
                        }}
                    />
                    <Stack.Screen
                        name="FinalList"
                        component={FinalList}
                        options={{
                            title: "Sorted List",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GroceryContextProvider>
    );
}

const styles = StyleSheet.create({});
