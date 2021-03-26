import { SidebarIcon } from './interfaces';
import { Styled } from './styled';
import { Name, Arrow, Avatar, Notifications } from '../../packages/components';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';

export const Header = ({ icon }: SidebarIcon) => {
  return (
    <Styled.Header>
      <Notifications icon={icon} notify />
      <Avatar />
      <Name name={'Alisher Morgenshern'} />
      <Arrow icon={<Icon type={IconType.Arrow} />} />
    </Styled.Header>
  );
};
