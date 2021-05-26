import React from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { Button } from '../Button/Button';
import { StepperWrapper } from './Elements';
import { StepperProps } from './StepperTypes';

export const Stepper: React.FC<StepperProps> = ({
  allElements,
  doneElements,
}): React.ReactElement => {
  let i = 0;
  let j = 0;

  const calcStep = (elem: any) => {
    if (doneElements[j]) {
      debugger;
      if (doneElements[j].id === elem.id) {
        i++;
        j++;
        return true;
      } else {
        i++;
        return false;
      }
    }
  };

  return (
    <StepperWrapper>
      {allElements.map((elem) => {
        debugger;
        return (
          <Button
            tag
            variant="primary"
            key={elem.id}
            height={40}
            width={40}
            startIcon={
              calcStep(elem) ? <IoCheckmarkDone key={elem.id + 'filtered'} /> : <React.Fragment />
            }
          />
        );
      })}
    </StepperWrapper>
  );
};
