import { StyleSheet, SafeAreaView, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// 应用和小组件之间的数据存储
import { ExtensionStorage } from "@bacons/apple-targets";
import { IconSymbol } from "@/components/ui/IconSymbol";

const widgetStorage = new ExtensionStorage("group.com.pixel-pets.widget");

export default function HomeScreen() {
  const handleSave = () => {
    console.log("save");
    widgetStorage.set("name", "mayue");
    // 存储之后需要重新reload小组件
    ExtensionStorage.reloadWidget();
  };

  const pets = [
    {
      name: "皮卡丘",
      color: "#FCD857",
      image: "https://i.imgur.com/z7v6y9U.png",
    },
    {
      name: "妙蛙种子",
      color: "#50CA70",
      image: "https://i.imgur.com/z7v6y9U.png",
    },
    {
      name: "小火龙",
      color: "#FF4136",
      image: "https://i.imgur.com/z7v6y9U.png",
    },
    {
      name: "杰尼龟",
      color: "#5ECCEF",
      image: "https://i.imgur.com/z7v6y9U.png",
    },
  ];

  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">What Are You</ThemedText>
        <ThemedText type="title">Looking For?</ThemedText>
      </ThemedView>
      <ThemedView style={styles.cardContent}>
        {/* 皮卡丘 妙蛙种子 小火龙 杰尼龟 */}
        {pets.map((pet) => {
          return (
            <ThemedView
              style={{ ...styles.petCard, backgroundColor: pet.color }}
            >
              <ThemedView>
                <Text>{pet.name}</Text>
                <IconSymbol
                  size={36}
                  name="arrow.right.circle"
                  color={"#fff"}
                />
              </ThemedView>
            </ThemedView>
          );
        })}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 32,
    fontWeight: "bold",
    backgroundColor: "transparent",
    margin: 24,
  },
  cardContent: {
    margin: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  petCard: {
    width: "48%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 16,
    padding: 10,
  },
});
