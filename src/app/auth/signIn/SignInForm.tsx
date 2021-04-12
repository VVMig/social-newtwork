import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { SignInValues } from '../interfaces';
import { signInShema } from '../configs/validationSchema';
import { signInFields } from '../configs/inputFields';
import { Form } from '../Form';
import { observer } from 'mobx-react-lite';
import { store } from '../../store';

const initialValues: SignInValues = {
  email: '',
  password: '',
};

export const SignInForm = observer(() => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInShema}
      onSubmit={(
        values: SignInValues,
        { setSubmitting }: FormikHelpers<SignInValues>
      ) => {
        store.user.signIn(values);
        setSubmitting(false);
      }}
    >
      <Form signIn fields={signInFields} />
    </Formik>
  );
});
