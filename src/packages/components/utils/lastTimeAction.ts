import moment from 'moment';

export const lastTimeAction = (time?: number) =>
  moment(time || 0).fromNow() === 'a few seconds ago'
    ? 'recently'
    : moment(time).fromNow();
