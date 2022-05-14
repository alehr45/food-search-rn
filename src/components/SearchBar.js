import React from "react";
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                onEndEditing={onTermSubmit}
                style={styles.inputStyle}
                placeholder="Search" value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        // backgroundColor: "#F0EEEE",
        backgroundColor: "#dbd9d9",
        marginTop: 15,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",

    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar