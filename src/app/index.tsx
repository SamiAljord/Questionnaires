import { images } from "@/assets";
import { Button } from "@/components";
import { router } from "expo-router";
import { useCallback } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Image, Text, View } from "react-native-ui-lib";

export default function IntroductionScreen() {
  const startQuestionary = useCallback(() => router.navigate("form"), []);
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ImageBackground style={styles.container} source={images.background}>
        <View flex>
          <SafeAreaView edges={["top"]} />
          <Text text30BL marginT-50 white>
            Welcome!
          </Text>
          <Text text50R white>
            Discover your investment preferences and let us calculate the risks
            for you
          </Text>
        </View>

        <View bottom flex gap-20 paddingT-20 centerH>
          <Image source={images.newLogo} cover style={styles.image} />
          <Button label="Start" onPress={startQuestionary} />
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
    padding: 20,
    justifyContent: "space-between",
  },
  image: {
    height: 200,
  },
});
