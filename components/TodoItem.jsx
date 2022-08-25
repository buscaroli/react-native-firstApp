import {
  View,
  Text,
  StyleSheet,
  Pressable,
  handleDeleteitem,
} from "react-native"

function TodoItem({
  data: {
    item: { key, todo },
  },
  handleDeleteItem,
}) {
  return (
    <View style={styles.todoWrapperView} key={key}>
      <Pressable
        android_ripple={{ color: "yellow", foreground: true }}
        onPress={() => handleDeleteItem(key)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todo}>{todo}</Text>
      </Pressable>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  todo: {
    fontSize: 20,
    backgroundColor: "teal",
    color: "#eee",
    padding: 8,
    borderRadius: 10,
  },
  todoWrapperView: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  pressedItem: {
    opacity: 0.8,
  },
})
