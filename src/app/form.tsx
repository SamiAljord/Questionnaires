import { Button } from "@/components";
import { Questions } from "@/constants";
import { calculateRiskProfileCategory } from "@/helpers";
import { FormReducer } from "@/reducers";
import { router } from "expo-router";
import { useCallback, useMemo, useReducer } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import {
  Colors,
  RadioButton,
  RadioGroup,
  Text,
  View,
  Wizard,
} from "react-native-ui-lib";

export default function FormScreen() {
  const [{ step, stepState, answers }, dispatch] = useReducer(FormReducer, {
    step: 0,
  });

  const LAST_QUESTION = useMemo(() => step === Questions.length - 1, [step]);

  const renderStep = useCallback(
    (index: number) => (
      <Wizard.Step
        state={stepState?.[index] || "enabled"}
        label={`Question ${index + 1}`}
        key={`Question-${index}`}
      />
    ),
    [stepState],
  );

  const selectOption = useCallback(
    (value: number) => {
      if (answers?.[step] === value + 1) return;

      dispatch({
        type: "set_answers",
        answers: { ...answers, [step]: value + 1 },
      });
    },
    [answers, step],
  );

  const onNextStep = useCallback(() => {
    if (!answers?.[step])
      return dispatch({
        type: "set_step_state",
        stepState: { ...stepState, [step]: "error" },
      });

    if (LAST_QUESTION) {
      const { category, total } = calculateRiskProfileCategory(answers);
      router.replace(`/result/${category},${total}`);
      return;
    }

    dispatch({ type: "set_step", step: step + 1 });
    dispatch({
      type: "set_step_state",
      stepState: { ...stepState, [step]: "completed" },
    });
  }, [step, answers, stepState, LAST_QUESTION]);

  return (
    <View flex bg-white paddingH-20>
      <Wizard
        activeIndex={stepState?.[step] === "error" ? -1 : step}
        containerStyle={styles.container}
      >
        {Questions.map((_, index) => renderStep(index))}
      </Wizard>

      <View marginT-40>
        <Text text50BO>{Questions[step].question}</Text>
        <RadioGroup
          marginT-28
          gap-16
          onValueChange={selectOption}
          initialValue={answers?.[step] ? answers?.[step] - 1 : undefined}
        >
          {Questions[step].options.map((option, i) => (
            <RadioButton
              key={`${Questions[step].id}-${i}`}
              label={option}
              value={i}
              containerStyle={styles.optionContainer}
            />
          ))}
        </RadioGroup>
      </View>

      <View bottom flex gap-20 paddingT-20 centerH>
        <SafeAreaView edges={["top"]} />
        <Button
          label={LAST_QUESTION ? "Show result" : "Continue"}
          onPress={onNextStep}
        />
        <SafeAreaView edges={["bottom"]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: ms(20),
  },
  optionContainer: {
    paddingVertical: ms(16),
    paddingHorizontal: ms(16),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.grey50,
  },
});
