/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { wordsArray } from '../helpers/wordsArray';
import { getUserWords } from '../helpers/getUserWords';
import { useAuthStore } from '../zustand/useAuthStore';

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

export const useCard = () => {
  const { uid } = useAuthStore();

  const [, setIsLearned] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<RandomWord>();
  const [sound, setSound] = useState<HTMLAudioElement | null>(null);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [changeWord, setChangeWord] = useState(false);

  // Get random word from data
  useEffect(() => {
    setIsLearned(false);

    const randomIndex = Math.floor(Math.random() * wordsArray.words.length);
    const randomWord = wordsArray.words[randomIndex];
    setCurrentWord(randomWord);
    loadSound(randomWord.word);

    if (!currentWord) return;
    if (words.includes(currentWord)) {
      setIsLearned(true);
    }
  }, [changeWord]);

  // Get learned words from firebase
  useEffect(() => {
    const fetchWords = async () => {
      const userWords = await getUserWords(uid);
      setWords(userWords);
    };
    fetchWords();
  }, [uid]);

  const loadSound = async (word: string) => {
    const soundModule = await import(`../assets/audio/${word}.mp3`);
    const audio = new Audio(soundModule.default);
    setSound(audio);
    setSoundLoaded(true);
  };

  const handleAudioClick = () => {
    if (sound) {
      sound.play();
    }
  };

  const handleChangeWord = () => {
    setChangeWord(!changeWord);
  };

  return {
    currentWord,
    soundLoaded,
    handleAudioClick,
    handleChangeWord,
  };
};
