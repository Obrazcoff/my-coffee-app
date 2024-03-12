import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

// components
import { Button } from "./shared/Button/Button";

// constants
import { Colors, Fonts, Gaps } from "./shared/tokens";

export default function App() {
  const animatedValue = new Animated.Value(-100);
  const textOpacity = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 1],
  });

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/start-bg.png")}
        style={styles.background}
        resizeMode="contain"
      >
        <Animated.View
          style={{
            ...styles.mainTitleView,
            transform: [{ translateY: animatedValue }],
            opacity: textOpacity,
          }}
          onLayout={onEnter}
        >
          <Text style={styles.mainTitle}>
            Одно из самых вкусных кофе в городе!
          </Text>
        </Animated.View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <Text style={styles.smallText}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Button text="Начать" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  bottomView: {
    width: "100%",
    marginBottom: 64,
    paddingHorizontal: 30,
  },
  mainTitleView: {},
  mainTitle: {
    color: "#fff",
    fontSize: Fonts.f34,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 43,
    letterSpacing: 1,
    paddingBottom: Gaps.g8,
  },

  smallText: {
    color: "#A9A9A9",
    fontSize: Fonts.f14,
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 20,
    paddingBottom: Gaps.g24,
  },
});
