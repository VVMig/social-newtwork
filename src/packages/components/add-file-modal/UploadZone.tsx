import React from 'react';

import { useDropzone } from 'react-dropzone';

import { Spinner } from '../spinner';
import { Styled } from './styled';

interface Props {
  uploadIcon: JSX.Element;
  loading: boolean;
  onDrop: (acceptedFiles: Blob[]) => void;
}

export const UploadZone = ({ uploadIcon, loading, onDrop }: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Styled.DragZone {...getRootProps()}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Styled.FilesInput {...getInputProps()} />
          <Styled.Drag active={isDragActive}>
            {isDragActive ? (
              <>
                {uploadIcon}
                <Styled.DragTip>Just drop</Styled.DragTip>
              </>
            ) : (
              <>
                {uploadIcon}
                <Styled.DragTip>Drop or click</Styled.DragTip>
              </>
            )}
          </Styled.Drag>
        </>
      )}
    </Styled.DragZone>
  );
};
