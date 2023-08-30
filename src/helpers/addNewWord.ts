import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const addNewWord = async (uid = '', word = '') => {
  const newWord = {
    word: word,
  };

  const newDoc = doc(collection(FirebaseDB, `${uid}/words/word/`));
  await setDoc(newDoc, newWord);
};
