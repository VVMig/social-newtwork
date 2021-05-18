import React, { useCallback, useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { Modal, ModalProps } from '../modal';
import { UploadFailed } from './UploadFailed';
import { UploadSuccess } from './UploadSuccess';
import { UploadZone } from './UploadZone';

interface Props extends ModalProps {
  extencions?: string;
  uploadIcon: JSX.Element;
  successIcon: JSX.Element;
  failedIcon: JSX.Element;
  sendFiles: (files: Blob[]) => Promise<void>;
  showError?: (error: AxiosError) => void;
}

export const AddFileModal = ({
  uploadIcon,
  sendFiles,
  showModal,
  setShowModal,
  successIcon,
  failedIcon,
  showError,
}: Props) => {
  const [files, setFiles] = useState<Blob[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const delay = 1000;

  const sendFilesHandler = async () => {
    try {
      setLoading(true);
      await sendFiles(files);
      setSuccess(true);
    } catch (error) {
      setError(true);
      showError && showError(error as AxiosError);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowModal(false);
      }, delay);
    }
  };

  useEffect(() => {
    if (files.length) sendFilesHandler();
  }, [files]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles([...acceptedFiles]);
  }, []);

  return (
    <Modal setShowModal={setShowModal} showModal={showModal}>
      {!success && !error && (
        <UploadZone onDrop={onDrop} loading={loading} uploadIcon={uploadIcon} />
      )}
      {success && <UploadSuccess successIcon={successIcon} />}
      {error && <UploadFailed failedIcon={failedIcon} />}
    </Modal>
  );
};
