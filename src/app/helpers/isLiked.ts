import { store } from '../store';

export const isLiked = (userId: string | undefined, photoSrc: string) => {
  const photoId = `${/(?!.*\/).*(?=\.)/.exec(photoSrc)?.shift()}`;

  return !!store.profile.photos
    .find((photo) => photo._id === photoId)
    ?.likes.find((like) => like.owner === userId);
};
