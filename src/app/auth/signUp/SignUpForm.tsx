import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { SignUpValues } from '../interfaces';
import { signUpShema } from '../configs/validationSchema';
import { signUpFields } from '../configs/inputFields';
import { user } from '../../store/User';
import { observer } from 'mobx-react-lite';
import { Form } from '../Form';

const initialValues: SignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUpForm = observer(() => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpShema}
      onSubmit={(
        values: SignUpValues,
        { setSubmitting }: FormikHelpers<SignUpValues>
      ) => {
        user.signUp(values);
        setSubmitting(false);
      }}
    >
      <Form signIn={false} fields={signUpFields} />
    </Formik>
  );
});
