import { Logo } from '../../packages/components';
import { Search } from '../../packages/components';
import { Styled } from './styled';

export const Header = () => {
  return (
    <Styled.Header>
      <Logo />
      <Search />
    </Styled.Header>
  );
};
