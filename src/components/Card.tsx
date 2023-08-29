import { Card, CardBody, CardFooter, CardHeader, Chip, Tooltip } from '@nextui-org/react';
import { IconVolume } from '@tabler/icons-react';

export const CardWord = () => {
  return (
    <Card className="py-4 max-w-3xl mx-auto ">
      <CardHeader className="justify-between">
        <div className="flex gap-4 mx-auto">
          <div className="flex flex-col">
            <p className="font-medium text-2xl text-gray-400">Verb</p>
            <p className="flex flex-row gap-5 text-7xl text-slate-50">Hello</p>
            <p className="self-end font-medium text-2xl text-gray-400">Hola</p>
          </div>
          <div className="self-center">
            <Tooltip showArrow={true} content="Reproducir sonido">
              <IconVolume
                size={'4.5rem'}
                color="#1ab7ea"
                className="cursor-pointer hover:drop-shadow-2xl"
              />
            </Tooltip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-7 py-10 text-default-400">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-2xl text-slate-300">Hello!, nice to meet you</p>
            <span className="text-xl pl-9 text-gray-500">Hola!, gusto en conocerte</span>
          </div>
          <div>
            <p className="text-2xl text-slate-300">You have to say hello to everyone</p>
            <span className="text-xl pl-9 text-gray-500">
              Debes de saludar a todos en la sala
            </span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="gap-3 px-7">
        <div className="flex gap-1">
          <Chip>Verb</Chip>
          <Chip>Texto</Chip>
          <Chip>Large</Chip>
          <Chip>Greetings</Chip>
        </div>
      </CardFooter>
    </Card>
  );
};
