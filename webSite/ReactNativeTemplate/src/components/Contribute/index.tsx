import { useState } from 'react';
import styles from './styles.module.css';

export const Contribute = () => {
  const [isCopiedValue, setIsCopiedValue] = useState(false);

  const copyPaste = () => {
    setIsCopiedValue(true);
    navigator.clipboard.writeText("npx create-react-native-app -e with-ReactNativeTemplate-boilerplate")
    setTimeout(() => {
      setIsCopiedValue(false);
    }, 450)
  }
  
    return (
      <section className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.contributeBox}>
            <h2>Contribua com o projeto</h2>
            <p>
              Quer ajudar a melhorar este boilerplate? Toda contribuição é
              bem-vinda!.
            </p>
          </div>
          <div className={styles.codeBox}>
            <code className={styles.code}>
              npx create-react-native-app -e
              with-ReactNativeTemplate-boilerplate
            </code>
            <span className={styles.copyButton} onClick={() => copyPaste()}>
              {isCopiedValue ? "copied" : "copy"}
            </span>
            <p className={styles.codeDescription}>
              Não perca tempo com configurações repetitivas. Com apenas um
              comando, você já tem um projeto organizado, performático e pronto
              pra escalar.
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.membersBox}>
            <h3>Members</h3>
            <ul className={styles.memberList}>
              <li>
                <img src="/img/penguin.svg" alt="Sra Penguin" /> Sra Penguin{" "}
                <span>100 Commits</span>
              </li>
              <li>
                <img src="/img/koala.svg" alt="Sr Koala" /> Sr Koala{" "}
                <span>120 Commits</span>
              </li>
              <li>
                <img src="/img/moss.svg" alt="Sr Moss" /> Sr Moss{" "}
                <span>10 Commits</span>
              </li>
            </ul>
          </div>
          <div className={styles.startSection}>
            <h2>
              <span className={styles.bolt}>⚡</span>Comece em segundos
            </h2>
            <p>
              Não perca tempo com configurações repetitivas. Com apenas um
              comando, você já tem um projeto organizado, performático e pronto
              pra escalar.
            </p>
          </div>
        </div>
      </section>
    );
}