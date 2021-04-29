import { Logo, Search } from '../../packages/components';
import { Styled } from './styled';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

interface Props {
  searchingUser: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  resetInput: () => void;
}

export const Header = ({ searchingUser, handleChange, resetInput }: Props) => {
  return (
    <Styled.Header>
      <Logo />
      <Search
        resetIcon={<Icon type={IconType.Error} title={'Reset'} />}
        inputValue={searchingUser}
        changeHandler={handleChange}
        resetValue={resetInput}
      />
    </Styled.Header>
  );
};
