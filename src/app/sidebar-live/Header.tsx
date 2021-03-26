import { Notifications } from '../../packages/components';
import { SidebarIcon } from './interfaces';
import { Styled } from './styled';

export const Header = ({ icon }: SidebarIcon) => {
  return (
    <Styled.Header>
      <Notifications icon={icon} />
    </Styled.Header>
  );
};
