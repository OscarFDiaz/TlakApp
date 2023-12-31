import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
} from '@nextui-org/react';
import { useState } from 'react';
import { EyeFilledIcon, GoogleIcon, EyeSlashFilledIcon } from '../../assets/icons/';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../zustand/useAuthStore';
import { Loader } from '../../components/Loader';
import { AUTH_STATUS } from '../../helpers/authStatus';
import { useForm, FormValidations } from '../../hooks/useForm';
import { IconAlertCircle } from '@tabler/icons-react';

const formData = {
  email: '',
  password: '',
};

const formValidations: FormValidations = {
  email: [(value: string) => /\S+@\S+\.\S+/.test(value), 'Formato de correo invalido.'],
  password: [
    (value: string) => value.length >= 6,
    'Verifique el usuario o la contraseña.',
  ],
};

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { formState, onInputChange, isFormValid, formValidation } = useForm(
    formData,
    formValidations,
  );
  const { email, password } = formState;
  const { emailValid, passwordValid } = formValidation;

  const { singInGoogle, login, status, errorMessage } = useAuthStore();

  const handleLogin = () => {
    setFormSubmitted(true);
    if (isFormValid) {
      login(email, password);
    }
  };

  const handleGoogle = () => {
    singInGoogle();
  };

  const handleError = (errorMessage: string) => {
    switch (errorMessage) {
      case 'auth/user-not-found':
        return 'Usuario no encontrado';
        break;
      case 'auth/wrong-password':
        return 'Verifique el usuario o la contraseña';
        break;
      default:
        return 'Ha ocurrido un error, verifique los datos ingresados';
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
          <h4 className="font-semibold text-large pt-4">Inicia sesión</h4>
          <Input
            type="email"
            label="Correo"
            placeholder="Ingresa tu correo"
            name="email"
            value={email}
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
            value={password}
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
            aria-label="Iniciar sesión"
            className="hover:bg-gray-700"
            onClick={handleLogin}
          >
            Iniciar sesión
          </Button>
          {errorMessage && formSubmitted ? (
            <Chip color="primary" startContent={<IconAlertCircle height={'20px'} />}>
              {error}
            </Chip>
          ) : null}

          <Link to="/auth/register" className="self-center hover:text-cyan-400">
            ¿No tienes una cuenta? <span className="underline ">Regístrate</span>
          </Link>

          <Divider />

          <div className="flex gap-4 items-center justify-center">
            <Button
              aria-label="Ingresar con Google"
              endContent={<GoogleIcon />}
              className="hover:bg-gray-700"
              onClick={handleGoogle}
            >
              Entrar con Google
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
