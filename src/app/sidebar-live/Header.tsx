import { Styled } from './styled';
import { Name, Arrow, Avatar, Notifications } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { store } from '../store';

interface Props {
  icon: JSX.Element;
}

export const Header = ({ icon }: Props) => {
  return (
    <Styled.Header>
      <Notifications icon={icon} notify />
      <Avatar size={30} route="#" />
      <Name name={store.user?.fullName || 'unknown'} />
      <Arrow icon={<Icon type={IconType.Arrow} />} />
    </Styled.Header>
  );
};
