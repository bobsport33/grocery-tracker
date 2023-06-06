import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { useState, useContext } from "react";
import { GroceryContext } from "../../store/grocery-context";

export default function CategorySelector({ onChange }) {
    const groceryCtx = useContext(GroceryContext);
    const [userOption, setUserOption] = useState({
        id: -1,
        categroy: "",
        color: "#fff",
    });

    const options = groceryCtx.categories;

    function selectCategoryHandler(option) {
        setUserOption(option);
        onChange(option);
    }

    return (
        <View style={styles.categoryContainer}>
            {options.map((option) => {
                return (
                    <Pressable
                        style={[
                            styles.category,
                            userOption.id === option.id && {
                                backgroundColor: option.color,
                            },
                        ]}
                        onPress={selectCategoryHandler.bind(this, option)}
                    >
                        <Text style={styles.text}>{option.category}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 12,
    },
    category: {
        color: Colors.navy,
        marginHorizontal: 8,
        marginVertical: 4,
        borderRadius: 8,
    },
    text: {
        fontSize: 20,
        marginVertical: 4,
        marginLeft: 8,
    },
});
