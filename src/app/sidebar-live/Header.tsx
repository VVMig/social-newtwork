import { Styled } from './styled';
import { Name, Arrow, Avatar, Notifications } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

interface Props {
  icon: JSX.Element;
}

export const Header = ({ icon }: Props) => {
  return (
    <Styled.Header>
      <Notifications icon={icon} notify />
      <Avatar />
      <Name name={'Alisher Morgenshern'} />
      <Arrow icon={<Icon type={IconType.Arrow} />} />
    </Styled.Header>
  );
};
