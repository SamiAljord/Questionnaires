import type { Reducer } from "react";
import type { WizardStepProps, WizardStepStates } from "react-native-ui-lib";

export type Answers = {
  [key: number]: number;
};
export type StepState = {
  [key: number]: WizardStepProps["state"] | WizardStepStates;
};
type SetStep = {
  type: "set_step";
  step: number;
};
type SetStepState = {
  type: "set_step_state";
  stepState: StepState;
};
type SetAnswers = {
  type: "set_answers";
  answers: Answers;
};
type Actions = SetStep | SetStepState | SetAnswers;

type States = {
  step: SetStep["step"];
  stepState?: SetStepState["stepState"];
  answers?: Answers;
};

const FormReducer: Reducer<States, Actions> = (state, action) => {
  switch (action.type) {
    case "set_step":
      return { ...state, step: action.step };
    case "set_step_state":
      return { ...state, stepState: action.stepState };
    case "set_answers":
      return { ...state, answers: action.answers };

    default:
      return state;
  }
};
export default FormReducer;
