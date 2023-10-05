import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Stack, useNavigation } from "expo-router";

export default function ModalScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Screen
        redirect={null as any}
        options={{
          headerTitle: "Modal Two",
          headerRight: () => (
            <Button
              title="Close Modal"
              onPress={() => {
                navigation.getParent()?.goBack();
              }}
            />
          ),
        }}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Modal Two</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="app/(modals)/modalTwo.tsx" />

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </>
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
});
