import { StyleSheet, Button, SafeAreaView } from "react-native";
import GeoLocation from "react-native-geolocation-service";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

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
    <SafeAreaView style={{ ...styles.container }}>
      <ThemedView style={{ ...styles.unlockPremium }}>
        <MaskedView
          style={{ height: 36, width: 36 }}
          maskElement={
            <IconSymbol size={36} color="#808080" name="star.circle.fill" />
          }
        >
          <LinearGradient
            colors={["#0E7AFE", "#AD52DE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <ThemedView style={{ ...styles.unlockPremiumTextContent }}>
          <MaskedView
            style={{ height: 24, width: "auto" }}
            maskElement={
              <ThemedText style={styles.unlockPremiumTextTitle}>
                Unlock Premium
              </ThemedText>
            }
          >
            <LinearGradient
              colors={["#0E7AFE", "#AD52DE"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            />
          </MaskedView>
          <ThemedText style={styles.unlockPremiumTextSubtitle}>
            All the Pets + widget backgrounds!
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* 设置列表 */}
      <ThemedView style={{ ...styles.settingsContent }}>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol size={24} color="#FF9500" name="sun.max.fill" />
          <ThemedText style={styles.settingsItemTextTitle}>
            Update Location
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol size={24} color="#34C759" name="thermometer.medium" />
          <ThemedText style={styles.settingsItemTextTitle}>
            Temperature Unit
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ ...styles.settingsItem }}>
          <IconSymbol size={24} color="#007AFF" name="info.circle.fill" />
          <ThemedText style={styles.settingsItemTextTitle}>About</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText style={{ fontSize: 14, color: "#85858B" }}>
        Pixel Pets v0.0.1
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignContent: "center",
  },
  unlockPremium: {
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    margin: 24,
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
    margin: 24,
    marginTop: 0,
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
