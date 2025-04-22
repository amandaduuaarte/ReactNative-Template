import React from 'react';
import {Linking} from 'react-native';
import {act, fireEvent, render} from '@testing-library/react-native';

import {Home} from '@/presentation/screens/home';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(() => Promise.resolve('mockResolve')),
}));

const sut = () => {
  return render(<Home />);
};

describe('Home Screen', () => {
  it('should render correctly all elements', () => {
    const {getByText, getByTestId} = sut();
    expect(
      getByText(' Boilerplate React Native com Clean Architecture'),
    ).toBeTruthy();
    expect(getByTestId('openDocs')).toBeTruthy();
  });

  it('should save data in storage when button was pressed', () => {
    const {getByTestId} = sut();

    const button = getByTestId('openDocs');
    act(() => {
      fireEvent.press(button);
    });

    expect(Linking.openURL).toHaveBeenCalled();
  });
});
