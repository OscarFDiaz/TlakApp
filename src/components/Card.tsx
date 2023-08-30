import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  CircularProgress,
  Tooltip,
} from '@nextui-org/react';
import { IconRefresh, IconVolume } from '@tabler/icons-react';
import { useCard } from '../hooks/useCard';
// import { addNewWord } from '../helpers/addNewWord';

export const CardWord = () => {
  // useEffect(() => {
  // getUserWords(uid);
  // addNewWord(uid, 'prueba');
  // const getLearned = async () => {
  //   await getUserWords(uid).then((data) => console.log(data));
  // };
  // const learned = getUserWords(uid);
  // console.log(learned);
  // console.log(getLearned());
  // const { words } = wordsArray;
  // });

  const { currentWord, soundLoaded, handleAudioClick, handleChangeWord } = useCard();

  return (
    <Card className="py-4 max-w-3xl mx-auto justify-center">
      <CardHeader className="justify-between">
        <div className="flex gap-4 mx-auto">
          <div className="flex flex-col ">
            <p className="font-medium text-2xl text-gray-400 lowercase">
              {currentWord?.types}
            </p>
            <p className="flex flex-row gap-5 text-7xl text-slate-50 ">
              {currentWord?.word}
            </p>
            <p className="self-end font-medium text-2xl text-gray-400 lowercase">
              {currentWord?.translation}
            </p>
          </div>
          <div className="self-center">
            <Tooltip showArrow={true} content="Reproducir sonido">
              {soundLoaded ? (
                <IconVolume
                  size={'4.5rem'}
                  color="#1ab7ea"
                  className="cursor-pointer hover:drop-shadow-2xl"
                  onClick={handleAudioClick}
                />
              ) : (
                <CircularProgress aria-label="Cargando..." />
              )}
            </Tooltip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-7 py-10 text-default-400">
        <div className="flex flex-col gap-8">
          {currentWord?.examples.map((example, i) => (
            <div key={i}>
              <p className="text-2xl text-slate-300 first-letter:uppercase">{example}</p>
              <p className="text-xl pl-9 text-gray-500 first-letter:uppercase">
                {currentWord.transExamples[i]}
              </p>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="gap-3 px-7 flex-wrap w-full ">
        {currentWord?.tags.map((tag, i) => (
          <div className="flex gap-1" key={i}>
            <Chip>{tag}</Chip>
          </div>
        ))}
      </CardFooter>
      <Button
        color="secondary"
        startContent={<IconRefresh />}
        onClick={handleChangeWord}
        className="mx-4 mt-8"
      >
        Carga otra palabra
      </Button>
    </Card>
  );
};
