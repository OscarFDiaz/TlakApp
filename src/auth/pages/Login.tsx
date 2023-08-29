import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Link,
} from '@nextui-org/react';
import { EyeSlashFilledIcon } from '../../assets/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../../assets/icons/EyeFilledIcon';
import { useState } from 'react';
import { GoogleIcon } from '../../assets/icons/GoogleIcon';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="grid place-items-center min-w-full min-h-screen dark text-foreground bg-gradient-to-b from-black to-gray-950">
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
            onClear={() => console.log('input cleared')}
          />
          <Input
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
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
            type={isVisible ? 'text' : 'password'}
          />
          <Button aria-label="Iniciar sesión" className="hover:bg-gray-700">
            Iniciar sesión
          </Button>
          <Link color="foreground" className="self-end">
            <NavLink to={'/auth/register'}>¿No tienes una cuenta? regístrate</NavLink>
          </Link>
          <Divider />

          <div className="flex gap-4 items-center justify-center">
            <Button
              aria-label="Ingresar con Google"
              endContent={<GoogleIcon />}
              className="hover:bg-gray-700"
            >
              Entrar con Google
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};
