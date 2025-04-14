import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import GeoLocation from "react-native-geolocation-service";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  const doUpdateLocation = async () => {
    try {
      const status = await GeoLocation.requestAuthorization("whenInUse");
      if (status === "granted") {
        GeoLocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 15000,
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#F2F2F7", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      {/* 解锁高级功能 */}
      <ThemedView style={{ ...styles.unlockPremium }}>
        <IconSymbol
          size={32}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        />
        <ThemedView style={{ ...styles.unlockPremiumTextContent }}>
          <ThemedText style={styles.unlockPremiumTextTitle}>
            Unlock Premium
          </ThemedText>
          <ThemedText style={styles.unlockPremiumTextSubtitle}>
            All the Pets + widget backgrounds!
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* 设置列表 */}
      <ThemedView style={{ ...styles.settingsContent }}>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol
            size={24}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
          />
          <ThemedText style={styles.settingsItemTextTitle}>
            Update Location
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol
            size={24}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
          />
          <ThemedText style={styles.settingsItemTextTitle}>
            Temperature Unit
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol
            size={24}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
          />
          <ThemedText style={styles.settingsItemTextTitle}>About</ThemedText>
        </ThemedView>
      </ThemedView>
      <Button onPress={doUpdateLocation} title="Update Location"></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  unlockPremium: {
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    // height: 98,
    gap: 8,
  },
  unlockPremiumIcon: {},
  unlockPremiumTextContent: {
    flexDirection: "column",
    gap: 4,
  },
  unlockPremiumTextTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  unlockPremiumTextSubtitle: {
    fontSize: 14,
    color: "#8A8A8E",
  },
  // settings item
  settingsContent: {
    borderRadius: 14,
    padding: 6,
    gap: 8,
  },
  settingsItem: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  setttingsItemTextContent: {
    flexDirection: "column",
    gap: 4,
  },
  settingsItemTextTitle: {
    fontSize: 16,
    color: "#000000",
  },
  settingsBorder: {
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
});
