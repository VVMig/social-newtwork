import { Instance } from 'mobx-state-tree';
import { store } from '../store';
import { Notification } from '../store/User';
import { IUpdate, NotificationType } from '../wsreducer/interfaces';

export const notificationReducer = (updatedUser: IUpdate) => {
  const { notifications } = updatedUser;

  notifications.forEach((notification) => {
    switch (notification.notificationType) {
      case NotificationType.Follow:
        store.user.addNotification({
          notifyMessage: `${notification.from.firstName} start follow you`,
          from: { ...notification.from },
        } as Instance<typeof Notification>);
        break;
      case NotificationType.Like:
        store.user.addNotification({
          notifyMessage: `${notification.from.firstName} liked your photo`,
          from: {
            ...notification.from,
          },
        } as Instance<typeof Notification>);
        break;
    }
  });
};
