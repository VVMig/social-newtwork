import React from 'react';
import { InputGroup } from '../../packages/components';
import { Icon } from '../Icon';
import { InputFields } from './interfaces';

interface Props {
  fields: InputFields[];
}

export const FormInputs = ({ fields }: Props) => {
  return (
    <>
      {fields.map((x, i) => (
        <InputGroup {...x} key={i} icon={<Icon type={x.icon} />} />
      ))}
    </>
  );
};
