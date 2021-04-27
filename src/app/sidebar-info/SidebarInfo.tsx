import React, { useEffect, useState } from 'react';
import { FriendFields, Sidebar } from '../../packages/components';
import { searchUsers } from '../helpers';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  showSidebar: boolean;
  showSidebarHandler: React.MouseEventHandler;
}

export const SidebarInfo = ({ showSidebarHandler, showSidebar }: Props) => {
  const [searchingUser, setSearchingUser] = useState('');
  const [searchedItems, setSearchedItems] = useState<FriendFields[]>([]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchingUser(event.currentTarget.value);
  };

  const resetInput = () => {
    setSearchingUser('');
  };

  useEffect(() => {
    searchingUser ? search() : setSearchedItems([]);
  }, [searchingUser]);

  const search = async () => {
    const foundUsers = await searchUsers(searchingUser);
    setSearchedItems(foundUsers);
  };

  return (
    <Styled.SidebarContainer>
      <Sidebar showSidebar={showSidebar}>
        <Header
          handleChange={handleChange}
          searchingUser={searchingUser}
          resetInput={resetInput}
        />
        <Content searchedItems={searchedItems} searchingUser={searchingUser} />
      </Sidebar>
      <Styled.SidebarToggler
        onClick={showSidebarHandler}
        showSidebar={showSidebar}
      >
        <Icon type={IconType.CloseArrow} />
      </Styled.SidebarToggler>
    </Styled.SidebarContainer>
  );
};
