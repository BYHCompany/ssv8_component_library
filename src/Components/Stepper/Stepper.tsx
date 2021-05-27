import React, { ReactFragment, useEffect, useState } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { Button } from '../Button/Button';
import { StepperWrapper } from './Elements';
import { StepperProps } from './StepperTypes';

export const Stepper: React.FC<StepperProps> = ({
  allElements,
  doneElements,
}): React.ReactElement => {
  let allValues: string[] = [];
  let doneValues: string[] = [];
  const [indexes, setIndexes] = useState<number[]>([]);

  let j = -1;

  const getAllValues = () => {
    allElements.forEach((item) => {
      allValues.push(item.id);
    });
  };
  const getDoneValues = () => {
    doneElements.forEach((item) => {
      doneValues.push(item.id);
    });
  };

  const setArrayIndexes = () => {
    const arr = [];
    allValues.forEach((item, i) => {
      debugger;
      arr.push(allValues.indexOf(doneValues.find((elem) => item === elem)));
    });
    setIndexes(arr);
  };

  useEffect(() => {
    getAllValues();
    getDoneValues();
    setArrayIndexes();
    console.log(indexes);
  }, []);

  return (
    <StepperWrapper>
      {allElements.map((elem) => {
        debugger;
        j++;
        return (
          <Button
            tag
            variant="primary"
            key={elem.id}
            height={40}
            width={40}
            startIcon={
              indexes[j] > -1 ? <IoCheckmarkDone key={elem.id + 'filtered'} /> : <React.Fragment />
            }
          />
        );
      })}
    </StepperWrapper>
  );
};
