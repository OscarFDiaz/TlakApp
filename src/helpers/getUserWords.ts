/* eslint-disable react-hooks/rules-of-hooks */
import { DocumentData, collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

interface Word {
  word: string;
}

export const getUserWords = async (uid = '') => {
  if (!uid) throw new Error('El uid no existe');

  const collectionRef = collection(FirebaseDB, `${uid}/words/word/`);

  const docs = await getDocs(collectionRef);

  const wordsArr: Word[] = [];
  docs.forEach((doc) => {
    const data = doc.data() as DocumentData;
    wordsArr.push({ word: data.word });
  });

  return wordsArr;
};
