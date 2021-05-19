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
      {fields.map((x, index) => (
        <InputGroup {...x} key={index} icon={<Icon type={x.icon} />} />
      ))}
    </>
  );
};
