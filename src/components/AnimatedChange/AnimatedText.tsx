import { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface AnimatedTextProps {
  text?: string;
}

export default function AnimatedText(props: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [prevText, setPrevText] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.text !== prevText) {
      setIsMounted(false);
      setTimeout(() => {
        setIsMounted(true);
      }, 100); // Adjust the delay as needed for the animation
    }
  }, [prevText, props.text]);

  return isMounted ? <Inner {...props} /> : <div style={{ height: '30px' }} />;
}

function Inner(props: AnimatedTextProps) {
  if (!props.text) return <></>;
  const { text } = props;
  const words = text.split("");

  return (
    <div className={styles.container}>
      {words.map((word, index) => (
        <span
          className={styles.animate}
          key={index}
          style={{ animationDelay: `${index * 0.01}s` }}
        >
          {word === " " ? "\u00A0" : word}
        </span>
      ))}
    </div>
  );
}