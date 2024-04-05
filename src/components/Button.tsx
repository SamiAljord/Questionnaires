import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { ms } from "react-native-size-matters";
import { Colors, Text, type TextProps } from "react-native-ui-lib";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  labelProps?: TextProps;
}
const Button = ({ label, labelProps, style, ...props }: ButtonProps) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    <Text white text60BO {...labelProps}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: Colors.grey1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ms(16),
  },
});
