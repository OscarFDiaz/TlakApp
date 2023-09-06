import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
} from '@nextui-org/react';
import { EyeSlashFilledIcon, EyeFilledIcon, GoogleIcon } from '../../assets/icons/';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../zustand/useAuthStore';
import { AUTH_STATUS } from '../../helpers/authStatus';
import { Loader } from '../../components/Loader';
import { FormValidations, useForm } from '../../hooks/useForm';
import { IconAlertCircle } from '@tabler/icons-react';

const formData = {
  name: '',
  email: '',
  password: '',
};

const formValidations: FormValidations = {
  email: [(value: string) => /\S+@\S+\.\S+/.test(value), 'Formato de correo invalido.'],
  password: [
    (value: string) => value.length >= 6,
    'Ingresa una contraseña con mayor longitud. (6)',
  ],
  name: [(value) => value.length >= 1, 'Este campo es obligatorio.'],
};

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, onInputChange, isFormValid, formValidation } = useForm(
    formData,
    formValidations,
  );

  const { email, password, name } = formState;
  const { emailValid, passwordValid, nameValid } = formValidation;

  const { register, status, errorMessage, singInGoogle } = useAuthStore();

  const handleRegister = () => {
    setFormSubmitted(true);
    if (isFormValid) {
      register(email, name, password);
    }
  };

  const handleGoogle = () => {
    singInGoogle();
  };

  const handleError = (errorMessage: string) => {
    switch (errorMessage) {
      case 'auth/email-already-in-use':
        return 'Ya existe un usuario con ese correo.';
        break;
      case 'auth/wrong-password':
        return 'Verifique el usuario o la contraseña.';
        break;
      case 'auth/email-already-exists':
        return 'Ya existe un usuario con ese correo.';
        break;
      default:
        return 'Ha ocurrido un error, verifique los datos ingresados.';
        break;
    }
  };

  const errorM = JSON.parse(JSON.stringify(errorMessage));
  const error = handleError(errorM.code);

  return (
    <section className="grid place-items-center min-w-full min-h-screen dark text-foreground bg-gradient-to-b from-black to-gray-950">
      {status == AUTH_STATUS.checking && <Loader />}

      <Card className="py-4 max-w-3xl mx-auto">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h1 className="text-4xl font-semibold">
            Bienvenido a{' '}
            <span className="text-transparent font-black bg-clip-text bg-gradient-to-t from-cyan-500 to-blue-500">
              Tlak!
            </span>
          </h1>
          <small className="font-medium text-default-500 text-base">
            Una forma de aprender inglés diariamente con una nueva palabra.
          </small>
        </CardHeader>
        <CardBody className="overflow-visible py-2 gap-4">
          <h4 className="font-semibold text-large pt-4">Regístrate</h4>
          <Input
            type="text"
            label="Nombre"
            placeholder="Ingresa tu nombre"
            name="name"
            value={formState.name}
            onChange={onInputChange}
          />
          {nameValid && formSubmitted && (
            <Chip color="primary" startContent={<IconAlertCircle height={'20px'} />}>
              {nameValid}
            </Chip>
          )}
          <Input
            type="email"
            label="Correo"
            placeholder="Ingresa tu correo"
            name="email"
            value={formState.email}
            onChange={onInputChange}
          />
          {emailValid && formSubmitted && (
            <Chip color="primary" startContent={<IconAlertCircle height={'20px'} />}>
              {emailValid}
            </Chip>
          )}
          <Input
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type={isVisible ? 'text' : 'password'}
            name="password"
            value={formState.password}
            onChange={onInputChange}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
          {passwordValid && formSubmitted && (
            <Chip color="primary" startContent={<IconAlertCircle height={'20px'} />}>
              {passwordValid}
            </Chip>
          )}
          <Button
            aria-label="Registrarme"
            className="hover:bg-gray-700"
            onClick={handleRegister}
          >
            Registrarme
          </Button>

          {errorMessage && formSubmitted ? (
            <Chip color="primary" startContent={<IconAlertCircle height={'20px'} />}>
              {error}
            </Chip>
          ) : null}

          <Link to="/auth/login" className="self-center hover:text-cyan-400">
            ¿Ya tienes una cuenta? <span className="underline ">Inicia sesión</span>
          </Link>

          <Divider />

          <div className="flex gap-4 items-center justify-center">
            <Button
              aria-label="Ingresar con Google"
              endContent={<GoogleIcon />}
              className="hover:bg-gray-700"
              onClick={handleGoogle}
            >
              Regístrate con Google
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
