import React from 'react';
import {Button, Text, View} from 'react-native';

import {GraduatedStudentFactory} from '@/main/factories/graduatedStudent/graduatedStudent-factory';

export const Home = (): React.ReactElement => {
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
      <Text>OI</Text>
      <Button title="save" onPress={handleSaveStorage} testID="save_button" />
    </View>
  );
};
