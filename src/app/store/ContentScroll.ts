import { Instance, types } from 'mobx-state-tree';

export const ContentScroll = types
  .model('ContentScroll', {
    scrollHeight: types.optional(types.number, 0),
    scrollTop: types.optional(types.number, 0),
    clientHeight: types.optional(types.number, 0),
  })
  .views((self) => ({
    get isBottomPage() {
      return self.scrollTop + self.clientHeight >= self.scrollHeight;
    },
  }));

export type IContentScroll = Instance<typeof ContentScroll>;
