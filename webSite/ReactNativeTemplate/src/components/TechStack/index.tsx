import styles from './styles.module.css';

export  const TechStack = () =>{
  return (
    <section className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.features}>
        <h2><span className={styles.bolt}>👾 </span>Tecnologias</h2>
          <p>React Native 0.77</p>
          <p>TypeScript</p>
          <p>React Navigation (removível)</p>
          <p>Axios, Zustand, MMKV</p>
          <p>E mais ferramentas que fazem sentido para escalar!</p>
        </div>
        <div className={styles.phoneMockup}>
          <img src="/img/MobileMockup.svg" alt="Phone mockup" />
        </div>
      </div>

      <div className={styles.bottomContent}>
        <div className={styles.koala}>
          <img src="/img/koala.svg" alt="Koala" />
        </div>

        <div className={styles.contribute}>
          <h2>📚 Como contribuir</h2>
          <ul>
            <li>✨ Faça um fork do projeto</li>
            <li>✨ Crie uma branch com sua feature ou fix</li>
            <li>✨ git checkout -b <code>feat/minha-contribuicao</code> ou <code>fix/minha-contribuicao</code></li>
            <li>✨ Commit com mensagens claras</li>
            <li>✨ git commit -m <code>"feat: adiciona validação de forms no domain"</code></li>
            <li>✨ Abra seu PR com uma breve descrição da proposta</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
