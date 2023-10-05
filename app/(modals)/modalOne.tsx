import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { View } from "../../components/Themed";
import { Link } from "expo-router";
import Colors from "../../constants/Colors";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(modals)/modalOne.tsx" />
      <Link href={"/modalTwo"} asChild>
        <Text style={styles.navigateModalTwo}>Navigate to Modal Two</Text>
      </Link>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  navigateModalTwo: {
    marginTop: 30,
    fontSize: 17,
    color: Colors.light.tint,
  },
});
