import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { SignInValues } from '../interfaces';
import { signInShema } from '../configs/validationSchema';
import { signInFields } from '../configs/inputFields';
import { Form } from '../Form';

const initialValues: SignInValues = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInShema}
      onSubmit={(
        values: SignInValues,
        { setSubmitting }: FormikHelpers<SignInValues>
      ) => {
        setSubmitting(false);
      }}
    >
      <Form signIn={true} fields={signInFields} />
    </Formik>
  );
};
