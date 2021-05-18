import React from 'react';

import { Formik, FormikHelpers } from 'formik';
import { observer } from 'mobx-react-lite';

import { authorize, parseError, signIn } from '../../helpers';
import { signInFields } from '../configs/inputFields';
import { signInShema } from '../configs/validationSchema';
import { Form } from '../Form';
import { SignInValues, SubmitProps } from '../interfaces';

const initialValues: SignInValues = {
  email: '',
  password: '',
};

export const SignInForm = observer(
  ({ startFetch, endFetch, errorHandler }: SubmitProps) => {
    const signInSubmit = async (values: SignInValues) => {
      try {
        startFetch();
        await signIn(values);
        await authorize();
      } catch (error) {
        errorHandler(parseError(error));
        endFetch();
      }
    };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signInShema}
        onSubmit={(
          values: SignInValues,
          { setSubmitting }: FormikHelpers<SignInValues>
        ) => {
          signInSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form signIn fields={signInFields} />
      </Formik>
    );
  }
);
