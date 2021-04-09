import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { SignInValues } from '../interfaces';
import { signInShema } from '../configs/validationSchema';
import { signInFields } from '../configs/inputFields';
import { Form } from '../Form';
import { observer } from 'mobx-react-lite';
import { user } from '../../store/User';

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
        user.signIn(values);
        setSubmitting(false);
      }}
    >
      <Form signIn={true} fields={signInFields} />
    </Formik>
  );
});
