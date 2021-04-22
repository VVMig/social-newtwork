import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { SignUpValues, SubmitProps } from '../interfaces';
import { signUpShema } from '../configs/validationSchema';
import { signUpFields } from '../configs/inputFields';
import { Form } from '../Form';
import { signUp, parseError, signIn, authorize } from '../../helpers';

const initialValues: SignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUpForm = ({
  startFetch,
  endFetch,
  errorHandler,
}: SubmitProps) => {
  const signUpSubmit = async (values: SignUpValues) => {
    try {
      startFetch();
      await signUp(values);
      await signIn({
        email: values.email,
        password: values.password,
      });
      await authorize();
    } catch (error) {
      errorHandler(parseError(error));
    } finally {
      endFetch();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpShema}
      onSubmit={(
        values: SignUpValues,
        { setSubmitting }: FormikHelpers<SignUpValues>
      ) => {
        signUpSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form fields={signUpFields} />
    </Formik>
  );
};
