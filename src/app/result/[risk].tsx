import { images } from "@/assets";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import { Colors, Image, ProgressBar, Text, View } from "react-native-ui-lib";

export default function ResultScreen() {
  const result = useLocalSearchParams<{ risk: string }>();

  const [category, score] = result.risk.split(",");
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ImageBackground style={styles.container} source={images.background}>
        <View centerH>
          <Image source={images.whiteLogo} />
          <Text white text40 marginT-40>
            Your score is
          </Text>
          <Text white text10BL>
            {score}
            <Text white text20L>
              /21
            </Text>
          </Text>
        </View>
        <View gap-24>
          <View>
            <Text text60>Your risk profile result is</Text>
            <Text text30BL>{category}!</Text>
          </View>
          <View>
            <View row spread paddingB-8>
              <Text green10>Low</Text>
              <Text yellow10>Medium</Text>
              <Text red10>High</Text>
            </View>
            <ProgressBar
              progress={(Number.parseInt(score) * 100) / 21}
              progressColor={Colors.$textPrimary}
            />
          </View>
        </View>
      </ImageBackground>
      <SafeAreaView edges={["bottom"]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    padding: ms(24),
    justifyContent: "space-between",
  },
});
