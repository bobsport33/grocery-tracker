import { createContext, useState } from "react";
import Colors from "../constants/Colors";

export const GroceryContext = createContext({
    groceries: [],
    addGroceries: (data) => {},
    updateGrocery: (itemId, category) => {},
    categories: [],
    curCategory: String,
    updateCurCategory: () => {},
});

export default function GroceryContextProvider({ children }) {
    const [groceryState, setGroceryState] = useState([]);
    const [curCategory, setCurCategory] = useState({
        id: -1,
        categroy: "",
        color: "#fff",
    });

    function addGroceries(data) {
        setGroceryState(data);
    }

    function updateGrocery(itemId, category) {
        // need to clean up category updating for grocery items
        const itemIndex = groceryState.findIndex(
            (groceryItem) => groceryItem.id === itemId
        );

        const updateableItem = groceryState[itemIndex];

        const updatedItem = { ...updateableItem, category };

        const updatedGroceries = [...groceryState];
        updatedGroceries[itemIndex] = updatedItem;
        setGroceryState(updatedGroceries);
    }

    function updateCurCategory(category) {
        setCurCategory(category);
    }

    const value = {
        groceries: groceryState,
        addGroceries: addGroceries,
        updateGrocery: updateGrocery,
        categories: [
            { id: 1, category: "Produce", color: Colors.categoryGreen },
            { id: 2, category: "Meat", color: Colors.red },
            { id: 3, category: "Dairy", color: Colors.blue },
            { id: 4, category: "Frozen", color: Colors.grey },
        ],
        curCategory: curCategory,
        updateCurCategory: updateCurCategory,
    };

    return (
        <GroceryContext.Provider value={value}>
            {children}
        </GroceryContext.Provider>
    );
}
