import {Button, Text} from 'react-native';

import {saveFactory} from '@/main/factories/graduatedStudent/graduatedStudent-factory';

import {Container} from './styles';
export const Home = (): React.ReactElement => {
  const handleSaveStorage = () => {
    saveFactory(
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
    <Container>
      <Text>OI</Text>
      <Button title="save" onPress={handleSaveStorage} />
    </Container>
  );
};
