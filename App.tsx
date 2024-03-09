import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  const btnColor = Platform.OS === "android" ? "#C67C4E" : "#fff";
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Одно из самых вкусных кофе в городе!</Text>
      <Text style={styles.smallText}>
        Свежие зёрна, настоящая арабика и бережная обжарка
      </Text>
      <View style={styles.button}>
        <Button title="Начать" color={btnColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  button: {
    width: "100%",
    height: 64,
    backgroundColor: "#C67C4E",
    borderRadius: 16,
    justifyContent: "center",
    marginBottom: 64,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 43,
    letterSpacing: 1,
    paddingBottom: 82,
  },

  smallText: {
    color: "#A9A9A9",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 20,
    paddingBottom: 24,
  },
});
