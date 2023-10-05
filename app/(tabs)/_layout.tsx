import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Text } from "../../components/Themed";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href={"/modalOne"} asChild>
              <Text lightColor={Colors.light.tint} style={styles.openModal}>
                Open Modal
              </Text>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href={"/modalOne"} asChild>
              <Text lightColor={Colors.light.tint} style={styles.openModal}>
                Open Modal
              </Text>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  openModal: {
    fontSize: 17,
    marginRight: 10,
  },
});
