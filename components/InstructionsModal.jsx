import { Text, View, StyleSheet, Pressable, Modal } from "react-native"

function InstructionsModal({ setShowModal, showModal }) {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Instructions</Text>
        <Text style={styles.body}>
          To create a new Todo enter the title of the Todo in the Input Field
          and click on the Add button.
        </Text>
        <Text style={styles.body}>
          To delete a Todo after completion, just click on it.
        </Text>
        <Text style={styles.body}>
          Press the Dismiss button to dismiss this view.
        </Text>
        <View style={styles.btn}>
          <Pressable onPress={() => setShowModal(false)}>
            <Text style={styles.btnTxt}>Dismiss</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  title: {
    marginTop: 50,
    fontSize: 40,
    padding: 20,
    paddingBottom: 40,
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "teal",
    color: "#eee",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    width: "80%",
    alignSelf: "center",
  },
  body: {
    margin: 20,
    fontSize: 22,
    marginBottom: 10,
    color: "#eee",
  },
  btn: {
    width: "40%",
    alignSelf: "center",
    marginTop: 60,
  },
  btnTxt: {
    fontSize: 25,
    borderWidth: 2,
    padding: 8,
    borderColor: "#eee",
    borderRadius: 16,
    textAlign: "center",
    color: "#eee",
  },
})

export default InstructionsModal
