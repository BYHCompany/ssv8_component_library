export type StepperElement = {
  id: string;
  value: string;
};

export interface StepperProps {
  allElements: StepperElement[];
  doneElements: StepperElement[];
}
