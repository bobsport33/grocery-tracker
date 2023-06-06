import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { GroceryContext } from "../store/grocery-context";
import Colors from "../constants/Colors";

export default function SectionList({ route }) {
    const groceryCtx = useContext(GroceryContext);

    const groceries = groceryCtx.groceries;

    const filteredGroceries = groceries.filter((item) => {
        return item.category === route.name;
    });

    console.log(filteredGroceries);

    return (
        <View style={styles.listContainer}>
            <FlatList
                style={styles.list}
                data={filteredGroceries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <Text style={styles.text}>{item.title}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: Colors.lightTan,
    },
    list: {
        marginVertical: 12,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
    },
});
