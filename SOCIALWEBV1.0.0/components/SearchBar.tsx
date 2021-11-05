import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState<string>(""); //State variable used to store the search text.
    return (
        <View style={styles.searchBar}>
            <TextInput
                value={searchValue}
                placeholder="Search"
                onChangeText={useCallback(
                    // A callback function called whenever the text input is changed.
                    (text: string) => {
                        setSearchValue(text);
                    },
                    [searchValue]
                )}
                style={styles.searchInput}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        width: "90%",
        backgroundColor: "#EBE8FB",
        borderRadius: 15,
    },
    searchInput: {
        width: "100%",
        padding: 5,
        marginHorizontal: 5,
    },
});
