import { View, TextInput, Button, StyleSheet } from "react-native"

function TodoInput({ textChangeHandler, btnSubmitHandler, inputField }) {
  return (
    <View style={styles.searchBarView}>
      <TextInput
        onChangeText={textChangeHandler}
        style={styles.searchInput}
        placeholder="Search"
        value={inputField}
      />
      <Button
        onPress={btnSubmitHandler}
        style={styles.searchButton}
        title="Add"
        accessibilityLabel="Add todo"
      />
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
  searchBarView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  searchInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 4,
    marginRight: 8,
    fontSize: 20,
  },
  searchButton: {
    color: "teal",
  },
})
