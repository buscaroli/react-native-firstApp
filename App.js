import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Pressable,
} from "react-native"
import TodoItem from "./components/TodoItem"
import TodoInput from "./components/TodoInput"
import InstructionsModal from "./components/InstructionsModal"

export default function App() {
  const [text, setText] = useState("")
  const [todoList, setTodoList] = useState([])
  const [showModal, setShowModal] = useState(false)

  const textChangeHandler = (txt) => {
    setText(txt)
  }

  const btnSubmitHandler = () => {
    setTodoList((prevState) => [
      ...prevState,
      { todo: text, key: Math.random().toString() },
    ])
    setText("")
  }

  const handleDeleteItem = (itemKeyToDelete) => {
    console.log(itemKeyToDelete)
    const filteredTodoList = todoList.filter(
      (item) => item.key !== itemKeyToDelete
    )
    console.log(filteredTodoList)
    setTodoList((currState) =>
      currState.filter((x) => x.key !== itemKeyToDelete)
    )
  }

  const handleTitleClick = () => {
    // launch modal
    console.log("clicked")
    setShowModal(true)
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.pressableTitle}>
          <View style={styles.alignTitle}>
            <Text style={styles.title}>ToDo List</Text>
            <Pressable onPress={() => handleTitleClick()}>
              <Text style={styles.questionMark}>❔</Text>
            </Pressable>
          </View>
        </View>

        <TodoInput
          textChangeHandler={textChangeHandler}
          btnSubmitHandler={btnSubmitHandler}
          inputField={text}
        />

        <View style={styles.itemsListView}>
          {todoList.length === 0 && (
            <Text style={styles.nothing}>Nothing to show yet!</Text>
          )}
          <FlatList
            data={todoList}
            renderItem={(todoData) => {
              return (
                <TodoItem data={todoData} handleDeleteItem={handleDeleteItem} />
              )
            }}
            alwaysBounceVertical="true"
          />
        </View>
      </View>
      {showModal && (
        <InstructionsModal setShowModal={setShowModal} showModal={showModal} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  itemsListView: {
    flex: 8,
    direction: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "90%",
  },
  pressableTitle: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingBottom: 20,
  },
  alignTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#eee",
  },
  questionMark: {
    marginLeft: 10,
    padding: 3,
    borderWidth: 2,
    borderColor: "#eee",
    borderRadius: 14,
    fontSize: 14,
    textAlign: "center",
    textAlignVertical: "center",
  },
  nothing: {
    fontSize: 24,
    alignSelf: "center",
    paddingTop: 20,
  },
})
