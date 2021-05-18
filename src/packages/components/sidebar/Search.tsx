import React from 'react';

import { Styled } from './styled';

interface Props {
  inputValue: string;
  changeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  resetValue: () => void;
  resetIcon: JSX.Element;
}

export const Search = ({
  inputValue,
  changeHandler,
  resetValue,
  resetIcon,
}: Props) => {
  return (
    <Styled.Search>
      <Styled.Input
        type="text"
        value={inputValue}
        placeholder="Search"
        onChange={changeHandler}
      />
      {inputValue && (
        <Styled.Button onClick={resetValue}>{resetIcon}</Styled.Button>
      )}
    </Styled.Search>
  );
};
