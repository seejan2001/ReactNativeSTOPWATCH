import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  //FUNCTIONS
  const interval = () => {
    if (second == 9) {
      setMinute(minute + 1);
      setSecond(0);
    } else {
      setSecond(second + 1);
    }
  };

  const reset = () => {
    setMinute(0);
    setSecond(0);
  };

  //COMPONENT
  const Button = ({ name }) => {
    return (
      <View style={styles.componentBtn}>
        <TouchableOpacity>
          <Text
            onPress={() => {
              name == "START" ? interval() : reset();
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  //MAIN FUNCTION
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text style={styles.btns}>{minute}</Text>
        <Text style={styles.btns}>{second}</Text>
      </View>
      <View style={styles.btn}>
        <Button name="START" />
        <Button name="RESET" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
  },
  btns: {
    fontSize: 40,
    margin: 20,
  },
  componentBtn: {
    height: 30,
    width: 55,
    padding: 5,
    backgroundColor: "lightgreen",
    borderRadius: 4,
    margin: 5,
  },
});
