import { useContext, useState } from "react";
import { GroceryContext } from "../store/grocery-context";
import { View, FlatList, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";

import ItemCard from "../components/item/ItemCard";
import CategorySelector from "../components/item/CategorySelector";
import ColorButton from "../components/ui/ColorButton";

export default function SortItems({ route, navigation }) {
    const groceryCtx = useContext(GroceryContext);

    const items = groceryCtx.groceries;

    const [curCategory, setCurCategory] = useState();
    const [produce, setProduce] = useState([]);
    const [meat, setMeat] = useState([]);
    const [dairy, setDairy] = useState([]);
    const [frozen, setFrozen] = useState([]);

    function updateCategoryHandler(category) {
        groceryCtx.updateCurCategory(category);
    }

    function pressHandler(title, category) {
        // if (!curCategory) {
        //     return;
        // }
        // if (produce.includes(newItem)) {
        //     console.log("item in array");
        //     return;
        // }
        // setProduce((curProduce) => [...curProduce, newItem]);
    }

    function submitHandler() {
        // items.forEach((item) => {
        //     console.log(item);
        // });
        navigation.navigate("FinalList");
    }

    return (
        <View style={styles.view}>
            <CategorySelector onChange={updateCategoryHandler} />
            <FlatList
                style={styles.list}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <ItemCard
                            title={item.title}
                            id={item.id}
                            onPress={pressHandler}
                        />
                    );
                    // Make an onPress event that worked on the screen level, and one for categories. When a category is selected, onPress should add the item to the category state array
                }}
            />
            {/* on submit this will go to the next screen where the items will be sorted and displayed */}
            <ColorButton
                title="submit"
                backgroundColor={Colors.navy}
                textColor={Colors.lightTan}
                onPress={submitHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: Colors.lightTan,
    },
    list: {
        marginHorizontal: 20,
        marginTop: 20,
    },
});
