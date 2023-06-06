import { useState, useContext } from "react";
import { TextInput, Text, View, StyleSheet, Button } from "react-native";
import ColorButton from "../components/ui/ColorButton";
import Colors from "../constants/Colors";
import { GroceryContext } from "../store/grocery-context";

export default function InputList({ navigation }) {
    const groceryCtx = useContext(GroceryContext);
    const [items, setItems] = useState([]);

    function changeTextHandler(input) {
        setItems(input);
    }

    function nextScreenHandler() {
        const itemsArray = items.split(/\r?\n/);
        const array = itemsArray.map((item) => {
            return { id: Math.random(), title: item, category: "" };
        });

        groceryCtx.addGroceries(array);

        navigation.navigate("SortItems", {
            items: items,
        });
    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Enter all Grocery List Items</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={changeTextHandler}
                />
            </View>
            <ColorButton
                title="Next"
                backgroundColor={Colors.navy}
                textColor={Colors.lightTan}
                onPress={nextScreenHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: Colors.lightTan,
        color: Colors.navy,
        flex: 1,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 16,
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 20,
        borderRadius: 8,
    },
    input: {
        textAlignVertical: "top",
        backgroundColor: "#fff",
        borderRadius: 8,
        fontSize: 16,
        flex: 1,
        alignItems: "stretch",
    },
});
