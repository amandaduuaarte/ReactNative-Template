import {Button, Text, View} from 'react-native';

import {
  getFactory,
  saveFactory,
} from '@/main/factories/graduatedStudent/graduatedStudent-factory';
export const Home = (): React.ReactElement => {
  const handleSaveStorage = () => {
    console.log('auiii');
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
    console.log('focusous', getFactory('student'));
  };

  return (
    <View>
      <Text>OI</Text>
      <Button title="save" onPress={handleSaveStorage} />
    </View>
  );
};
