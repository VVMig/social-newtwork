import React, { useCallback, useEffect, useState } from 'react';

import { debounce } from 'lodash';
import { observer } from 'mobx-react-lite';

import { FriendFields, Sidebar } from '../../packages/components';
import { parseError, searchUsers } from '../helpers';
import { Icon } from '../Icon';
import { IconType } from '../IconEnum';
import { store } from '../store';
import { Content } from './Content';
import { Header } from './Header';
import { Styled } from './styled';

interface Props {
  showSidebar: boolean;
  showSidebarHandler: React.MouseEventHandler;
}

export const SidebarInfo = observer(
  ({ showSidebarHandler, showSidebar }: Props) => {
    const [searchingUser, setSearchingUser] = useState('');
    const [searchedItems, setSearchedItems] = useState<FriendFields[]>([]);
    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const debounceDelay = 500;

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      setIsSearchLoading(true);
      setSearchingUser(event.currentTarget.value);
    };

    const search = async () => {
      try {
        const foundUsers = await searchUsers(searchingUser);
        setSearchedItems(foundUsers);
      } catch (error) {
        store.setError(parseError(error));
      } finally {
        setIsSearchLoading(false);
      }
    };

    const delayedSearch = useCallback(debounce(search, debounceDelay), [
      searchingUser,
    ]);

    const resetInput = () => {
      setSearchingUser('');
    };

    useEffect(() => {
      if (searchingUser) {
        delayedSearch();
      } else {
        setSearchedItems([]);
        setIsSearchLoading(false);
      }

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
          <Content
            searchedItems={searchedItems}
            searchingUser={searchingUser}
            isSearchLoading={isSearchLoading}
          />
        </Sidebar>
        <Styled.SidebarToggler
          onClick={showSidebarHandler}
          showSidebar={showSidebar}
        >
          <Icon type={IconType.CloseArrow} />
        </Styled.SidebarToggler>
      </Styled.SidebarContainer>
    );
  }
);
