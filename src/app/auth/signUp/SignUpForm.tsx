import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Styled } from '../styled';
import { SignUpValues } from '../interfaces';
import { Button } from '../../../packages/components';
import { signUpShema } from '../configs/validationSchema';
import { signUpFields } from '../configs/inputFields';
import { FormInputs } from '../FormInputs';
import { user } from '../../store/User';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

const initialValues: SignUpValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUpForm = observer(() => {
  const history = useHistory();

  const toVerify = async (values: SignUpValues) => {
    const redirect = await user.signUp(values);

    redirect && history.push('/verify');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpShema}
      onSubmit={(
        values: SignUpValues,
        { setSubmitting }: FormikHelpers<SignUpValues>
      ) => {
        toVerify(values);
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
        <Button type="submit" disabled={user.loading}>
          <Styled.BtnText>Sign up</Styled.BtnText>
        </Button>
      </Styled.Form>
    </Formik>
  );
});
