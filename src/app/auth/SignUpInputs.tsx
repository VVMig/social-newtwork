import React from 'react';
import { InputGroup } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

export const SignUpInputs = () => {
  return (
    <>
      <InputGroup
        icon={<Icon type={IconType.User} />}
        name="firstName"
        placeholder="First name"
      />
      <InputGroup
        icon={<Icon type={IconType.User} />}
        name="lastName"
        placeholder="Last name"
      />
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
