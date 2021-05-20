import React, { useEffect, useRef, useState } from 'react';

import { observer } from 'mobx-react-lite';

import { ScrollArrow, Spinner } from '../../../packages/components';
import { Icon } from '../../Icon';
import { IconType } from '../../IconEnum';
import { store } from '../../store';
import { Message } from './Message';
import { Styled } from './styled';

interface Props {
  loading: boolean;
}

export const ChatBody = observer(({ loading }: Props) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const stopScrollBottom = 600;
  const [scrollToLastMessage, setScrollToLastMessage] = useState(true);

  const scrollToBottom = (element: HTMLElement, smooth?: boolean) => {
    element.scroll({
      top: element.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  const scrollToBottomBtnHandler: React.MouseEventHandler = () => {
    if (bodyRef.current) {
      scrollToBottom(bodyRef.current, true);
    }
  };

  useEffect(() => {
    if (bodyRef.current && scrollToLastMessage) {
      scrollToBottom(bodyRef.current, true);
    }
  }, [store.dialog.messages.length]);

  useEffect(() => {
    if (bodyRef.current) {
      scrollToBottom(bodyRef.current);
    }
  }, [loading]);

  const scrollHanlder = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop >
      stopScrollBottom
    ) {
      setScrollToLastMessage(false);
    } else {
      setScrollToLastMessage(true);
    }
  };

  return (
    <Styled.ChatBody padding={loading} ref={bodyRef} onScroll={scrollHanlder}>
      {loading ? (
        <Spinner />
      ) : (
        store.dialog.messages.map((message) => (
          <Message
            unread={store.user._id === message.from ? !message.read : false}
            key={message._id}
            text={message.text}
            owner={message.from === store.user._id}
          />
        ))
      )}
      {!scrollToLastMessage && (
        <ScrollArrow
          onClick={scrollToBottomBtnHandler}
          icon={<Icon type={IconType.CloseArrow} />}
        />
      )}
    </Styled.ChatBody>
  );
});
