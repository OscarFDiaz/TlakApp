import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Link,
  Spacer,
} from '@nextui-org/react';
import { EyeSlashFilledIcon } from '../assets/icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../assets/icons/EyeFilledIcon';
import { useState } from 'react';
import { GoogleIcon } from '../assets/icons/GoogleIcon';

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="py-4 max-w-3xl mx-auto object-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h1 className="text-4xl font-bold">
          Bienvenido a{' '}
          <span className="text-transparent font-black bg-clip-text bg-gradient-to-t from-cyan-500 to-blue-500">
            Tlak!
          </span>
        </h1>
        <small className="text-default-500 text-base">
          Una forma de aprender ingles diariamente con una nueva palabra.
        </small>
        <Spacer />
        <h4 className="font-bold text-large">Ingresa tus datos</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-4">
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
        <Button aria-label="Iniciar sesión">Iniciar sesión</Button>
        <Link href="#" color="foreground" className="self-end">
          ¿No tienes una cuenta? registrarme
        </Link>
        <Divider />

        <div className="flex gap-4 items-center justify-center">
          <Button aria-label="Ingresar con Google" endContent={<GoogleIcon />}>
            Entrar con Google
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
