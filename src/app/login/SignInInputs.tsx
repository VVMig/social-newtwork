import React from 'react';
import { InputGroup } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

export const SignInInputs = () => {
  return (
    <>
      <InputGroup
        icon={<Icon type={IconType.Email} />}
        name="email"
        placeholder="email"
      />
      <InputGroup
        icon={<Icon type={IconType.Lock} />}
        name="password"
        placeholder="password"
      />
    </>
  );
};
