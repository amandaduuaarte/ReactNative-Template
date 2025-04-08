import type {ReactNode} from 'react';

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { Contribute } from "../components/Contribute";
import { TechStack } from "../components/TechStack";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1>Boilerplate React Native com Clean Architecture</h1>
          <p>
            Construa apps escaláveis com uma estrutura sólida desde o primeiro
            commit.
            <br />
            Este boilerplate foi pensado para desenvolvedores que buscam
            organização, legibilidade e facilidade para evoluir projetos em
            React Native.
          </p>
          <Link className="button button--success" to="/docs">
            Docs
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/img/logo-koala.svg"
            alt="Koala pixel art"
            className={styles.koala}
          />
        </div>
      </section>
    </main>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
        <Contribute />
        <TechStack />
      </main>
    </Layout>
  );
}
