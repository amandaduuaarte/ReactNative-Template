## 📱 React Native Clean Architecture Template

Este projeto é um template para aplicações React Native estruturado seguindo os princípios da Clean Architecture. Ele não é separado por módulos ou features, mas sim por camadas, com responsabilidades bem definidas e independentes entre si.

![mockMobile](https://github.com/user-attachments/assets/b299437e-309a-4ed5-95e4-f5415a66166c)



## 🧠 Filosofia

Sempre que for necessário desacoplar alguma camada, deve ser criada uma abstração.
Todos os módulos devem depender da abstração, e não da camada em si.

## 🗂️ Estrutura de Pastas

```
src/
├── App.tsx
├── Domain
├── Data
├── Infra
├── Main
├── Presentation
├── Services
└── Validation
```

## 🧱 Camadas

🔹 Main/
Responsável pelas routes e design patterns principais.

Contém os adapters e factories.

Pensado para facilitar a troca da lib de navegação, mesmo utilizando React Navigation.

⚠️ Pode ser avaliado mover routes para Presentation, se o React Navigation for adotado como padrão.

🔹 Domain/ – Regras de Negócio

Modelos, erros e funções puras de negócio.

Validadores de domínio.

Aqui ficam todas as regras isoladas que não dependem de UI, rede ou armazenamento.

🔹 Data/

Implementa os UseCases usando as regras do Domain.

Define interfaces para acesso a dados.

Depende de Infra para implementar as interfaces (ex: chamadas HTTP).

Pode conter lógica como autenticação, acesso ao storage, etc.

🔹 Infra/

Implementações concretas das abstrações definidas em Data.

Ex: Requisições com Axios, acesso a banco local, etc.

🔹 Presentation/ – Interface com o Usuário

Toda a implementação de UI e gerenciamento de estado.

Componentes, hooks, pages e protocolos.

Protocolos são abstrações das regras (ex: validações que recebem X e retornam Y).

🔹 Validation/

Implementa validadores e suas interfaces.

Regras de validação que devem ser aplicadas à Presentation.

Ex: validators, interfaces, useValidationRules.

✅ Exemplo de Fluxo

Presentation chama um UseCase de Data.

O UseCase depende de abstrações que serão implementadas por Infra.

Infra faz chamadas externas (ex: API).

Regras de negócio e validações são tratadas em Domain e Validation.

## 🚀 Scripts


Iniciar o app no Android

`yarn android`

Iniciar o app no iOS

`yarn ios`

Start do Metro Bundler

`yarn start`

Rodar testes

`yarn test`

Lint

`yarn lint`

Instalar hooks do Husky
yarn prepare

## 🧪 Testes

Utilizamos o Jest e o Testing Library para garantir a qualidade e o comportamento dos componentes e hooks.

## 🛠️ Tecnologias

React Native 0.77

React 18.3

React Navigation

Zustand

Axios

Reactotron

React Query

TypeScript

Github Actions
