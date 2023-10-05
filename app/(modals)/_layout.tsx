import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function ModalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="modalOne"
        options={{
          headerTitle: "Modal One",
          headerRight: () => (
            <Link href="../" asChild>
              <Text style={styles.closeModal}>Close Modal</Text>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="modalTwo"
        options={{
          headerTitle: "Modal Two",
          headerRight: () => (
            <Link href="../" asChild>
              <Text style={styles.closeModal}>Close Modal</Text>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  closeModal: {
    fontSize: 17,
    color: Colors.light.tint,
  },
});
