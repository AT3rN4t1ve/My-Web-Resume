import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timer;
    let startTimeout;
    
    setDisplayText('');
    
    startTimeout = setTimeout(() => {
      let i = 0;
      timer = setInterval(() => {
        i++;
        setDisplayText(text.slice(0, i)); 
        if (i >= text.length) {
          clearInterval(timer);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
    };
  }, [text, speed, delay]);

  return displayText;
};

export default useTypewriter;