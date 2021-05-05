import React, { useCallback, useEffect, useState } from 'react';
import { FriendFields, Sidebar } from '../../packages/components';
import { searchUsers } from '../helpers';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';
import { debounce } from 'lodash';

interface Props {
  showSidebar: boolean;
  showSidebarHandler: React.MouseEventHandler;
}

export const SidebarInfo = ({ showSidebarHandler, showSidebar }: Props) => {
  const [searchingUser, setSearchingUser] = useState('');
  const [searchedItems, setSearchedItems] = useState<FriendFields[]>([]);
  const debounceDelay = 500;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchingUser(event.currentTarget.value);
  };

  const search = async () => {
    const foundUsers = await searchUsers(searchingUser);
    setSearchedItems(foundUsers);
  };

  const delayedSearch = useCallback(debounce(search, debounceDelay), [
    searchingUser,
  ]);

  const resetInput = () => {
    setSearchingUser('');
  };

  useEffect(() => {
    searchingUser ? delayedSearch() : setSearchedItems([]);
    return delayedSearch.cancel;
  }, [searchingUser]);

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
