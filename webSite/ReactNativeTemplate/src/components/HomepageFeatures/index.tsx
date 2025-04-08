import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  svg: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "💡 Arquitetura Escalável",
    svg: "/img/mamao.svg",
    description: (
      <>
        Boilerplate baseado em Clean Architecture, com separação clara de
        responsabilidades. Ideal para projetos que vão crescer com o tempo — ou
        que já nascem grandes.
      </>
    ),
  },
  {
    title: "⚙️ Pronto para CI/CD",
    svg: "/img/koala.svg",
    description: (
      <>
        Já vem com configurações de CI/CD para automatizar testes, lint e
        deploys. Integra facilmente com GitHub Actions, garantindo entregas
        seguras desde o início.
      </>
    ),
  },
  {
    title: "🚀 Produtividade ",
    svg: "/img/morango.svg",
    description: (
      <>
        Setup inicial rápido, com organização pensada para facilitar leitura e
        manutenções. Escreva código de verdade em minutos — sem se perder no
        boilerplate.
      </>
    ),
  },
];

function Feature({ title, svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.cardFeature}>
        <div className="text--center">
          <img src={svg} alt="image" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
