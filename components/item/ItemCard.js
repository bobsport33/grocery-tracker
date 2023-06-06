import { useState, useContext } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { GroceryContext } from "../../store/grocery-context";

export default function ItemCard({ title, id }) {
    const groceryCtx = useContext(GroceryContext);

    const [isSelected, setIsSelected] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const [category, setCategory] = useState("");

    function pressHandler() {
        setBackgroundColor(groceryCtx.curCategory.color);
        setCategory(groceryCtx.curCategory.category);
        let current = isSelected;
        setIsSelected(!current);

        // update ctx to new category
        groceryCtx.updateGrocery(id, groceryCtx.curCategory.category);
    }

    return (
        <Pressable
            style={({ pressed }) => [
                styles.card,
                isSelected && styles.highlight,
                isSelected && { backgroundColor: backgroundColor },
            ]}
            onPress={pressHandler}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 8,
        marginVertical: 4,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    highlight: {
        elevation: 1,
        shadowColor: "black",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 1,
    },
    text: {
        fontSize: 18,
        color: Colors.navy,
        marginLeft: 8,
    },
});
