import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Styled } from './styled';
import { Values, FormProps } from './interfaces';
import { Button } from '../../packages/components';
import { shema } from './validationSchema';
import { signInFields, signUpFields } from './inputFields';
import { FormInputs } from './FormInputs';

const initialValues: Values = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const Form = ({ signin, signInDelayed }: FormProps) => {
  return (
    <Styled.FormContainer signin={signin}>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Styled.Form signin={signInDelayed}>
          <Styled.FormTitle>
            <h2>{signInDelayed ? 'Sign in to account' : 'Create account'}</h2>
          </Styled.FormTitle>
          <Styled.InputsContainer>
            {signInDelayed ? (
              <FormInputs fields={signInFields} />
            ) : (
              <FormInputs fields={signUpFields} />
            )}
          </Styled.InputsContainer>
          <Button type="submit">
            <Styled.BtnText>
              {signInDelayed ? 'Sign in' : 'Sign up'}
            </Styled.BtnText>
          </Button>
        </Styled.Form>
      </Formik>
    </Styled.FormContainer>
  );
};
