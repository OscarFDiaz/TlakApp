/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState, ChangeEvent } from 'react';

type FormValidationFn = (value: string) => boolean;
export type FormValidations = Record<string, [FormValidationFn, string]>;

export const useForm = (
  initialForm: Record<string, string> = {},
  formValidations: FormValidations = {},
) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<{ [key: string]: string | null }>(
    {},
  );

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: { [key: string]: string | null } = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    formValidation,
    formState,
    isFormValid,
    onInputChange,
    onResetForm,
  };
};
