import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const FinalContext = createContext();
const FinalProvider = ({ children }) => {
  const [nick, setNick] = useState([]);
  
  

  const findFinal = async () => {
    const result = await AsyncStorage.getItem('hello4');
    if (result !== null) setNick(JSON.parse(result));
   
  };
 
  useEffect(() => {
    findFinal();
  }, []);

  return (
    <FinalContext.Provider value={{ nick, setNick, findFinal }}>
      {children}
    </FinalContext.Provider>
  );
};

export const useFinal = () => useContext(FinalContext);

export default FinalProvider;