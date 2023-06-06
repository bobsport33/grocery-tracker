import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function ColorButton({
    title,
    backgroundColor,
    textColor,
    onPress,
}) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: backgroundColor },
                pressed && styles.pressed,
            ]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        marginVertical: 16,
        width: "40%",
        justifyContent: "center",
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        borderRadius: 4,
        alignSelf: "center",
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        padding: 16,
        fontSize: 16,
    },
});
