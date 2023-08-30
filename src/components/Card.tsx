/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  CircularProgress,
  Tooltip,
} from '@nextui-org/react';
import { IconVolume } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { getUserWords } from '../helpers/getUserWords';
import { useAuthStore } from '../zustand/useAuthStore';
import { wordsArray } from '../helpers/wordsArray';
// import { addNewWord } from '../helpers/addNewWord';

interface Word {
  word: string;
}

interface RandomWord {
  word: string;
  types: string;
  tags: string[];
  translation: string;
  examples: string[];
  transExamples: string[];
}

export const CardWord = () => {
  const { uid } = useAuthStore();

  const [isLearned, setIsLearned] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<RandomWord>();
  const [sound, setSound] = useState<HTMLAudioElement | null>(null);
  const [soundLoaded, setSoundLoaded] = useState(false);

  // Get random word from data
  useEffect(() => {
    setIsLearned(false);

    const randomIndex = Math.floor(Math.random() * wordsArray.words.length);
    const randomWord = wordsArray.words[randomIndex];
    setCurrentWord(randomWord);

    if (!currentWord) return;
    if (words.includes(currentWord)) {
      setIsLearned(true);
    }
  }, [isLearned]);

  // Get learned words from firebase
  useEffect(() => {
    const fetchWords = async () => {
      const userWords = await getUserWords(uid);
      setWords(userWords);
    };
    fetchWords();
  }, []);

  const loadSound = async () => {
    const soundModule = await import(`../assets/audio/${currentWord?.word}.mp3`);
    const audio = new Audio(soundModule.default);
    setSound(audio);
    setSoundLoaded(true);
  };

  const handleAudioClick = () => {
    loadSound();
    if (sound) {
      sound.play();
    }
  };

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

  return (
    <Card className="py-4 max-w-3xl mx-auto ">
      <CardHeader className="justify-between">
        <div className="flex gap-4 mx-auto">
          <div className="flex flex-col ">
            <p className="font-medium text-2xl text-gray-400">{currentWord?.types}</p>
            <p className="flex flex-row gap-5 text-7xl text-slate-50 ">
              {currentWord?.word}
            </p>
            <p className="self-end font-medium text-2xl text-gray-400">
              {currentWord?.translation}
            </p>
          </div>
          <div className="self-center">
            <Tooltip showArrow={true} content="Reproducir sonido">
              {!soundLoaded ? (
                <CircularProgress aria-label="Cargando..." />
              ) : (
                <IconVolume
                  size={'4.5rem'}
                  color="#1ab7ea"
                  className="cursor-pointer hover:drop-shadow-2xl"
                  onClick={handleAudioClick}
                />
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
      <CardFooter className="gap-3 px-7 flex-wrap w-full">
        {currentWord?.tags.map((tag, i) => (
          <div className="flex gap-1" key={i}>
            <Chip>{tag}</Chip>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};
