export const endpoints = {
  user: {
    deleteRoom: '/user/deleteRoom',
    getRoom: '/user/room',
    follow: '/user/follow',
    unfollow: 'user/unfollow',
    updateAvatar: '/user/updateAvatar',
    uploadPhotos: '/user/uploadPhotos',
    removePhotos: '/user/removePhotos',
    sendMessage: '/user/sendMessage',
    searchUser: (name: string) => `/user/search/${name}`,
    toggleLike: '/user/toggleLike',
    clearNotifications: '/user/clearNotifications',
    getUser: '/user/current',
  },
  auth: {
    refreshToken: '/auth/refreshToken',
    signIn: '/auth/login',
    sighOut: '/auth/signOut',
    signUp: '/auth/registration',
  },
  profile: {
    getProfile: (id: string) => `/profile/${id}`,
  },
};
