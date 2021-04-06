import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Styled } from '../styled';
import { SignUpValues } from '../interfaces';
import { Button } from '../../../packages/components';
import { signUpShema } from '../configs/validationSchema';
import { signUpFields } from '../configs/inputFields';
import { FormInputs } from '../FormInputs';

const initialValues: SignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUpForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpShema}
      onSubmit={(
        values: SignUpValues,
        { setSubmitting }: FormikHelpers<SignUpValues>
      ) => {
        setSubmitting(false);
      }}
    >
      <Styled.Form signIn={false}>
        <Styled.FormTitle>
          <h2>Create account</h2>
        </Styled.FormTitle>
        <Styled.InputsContainer>
          <FormInputs fields={signUpFields} />
        </Styled.InputsContainer>
        <Button type="submit">
          <Styled.BtnText>Sign up</Styled.BtnText>
        </Button>
      </Styled.Form>
    </Formik>
  );
};
