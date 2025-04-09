---
sidebar_position: 2
---

# Main
 `src/main`

Camada que lida com as implementações de forma isolada sendo responsável por guardar **adapters e factorys**, os quais vão ser usados na aplicação. 

Contém os adapters e factories.

Pensado para facilitar a troca de libs, impedindo que as funcionalidades do projeto sofram grandes impactos ao ocorrer alguma mudança de solução. 


## Exemplo de uma implementação

Create a file at `src/presentation/screens/home`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import {Button, View} from 'react-native';

import {GraduatedStudentFactory} from '@/main/factories/graduatedStudent/graduatedStudent-factory';

export const Home = () => {
  const handleSaveStorage = () => {
    GraduatedStudentFactory.save(
      {
        id: 123,
        data: {
          daysForGraduation: 3,
          isGraduated: true,
        },
      },
      'student',
    );
  };

  return (
    <View>
      <Button title="save" onPress={handleSaveStorage} testID="save_button" />
    </View>
  );
};
```

A ideia é sempre criar adapters para implementações externas e factorys para isolar funcionalidades, como é o caso do **GraduatedStudentFactory** que tem a função para salvar informações de um estudante.

