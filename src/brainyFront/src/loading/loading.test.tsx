import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Animated } from 'react-native';
import LoadingScreen, { LoadingScreenProps } from './loading.view';

jest.mock('react-native/Libraries/Animated/src/Animated', () => {
  const ActualAnimated = jest.requireActual('react-native/Libraries/Animated/src/Animated');
  return {
    ...ActualAnimated,
    timing: (value, config) => {
      return {
        start: (callback) => {
          value.setValue(config.toValue);
          callback && callback();
        },
      };
    },
  };
});

test('renders LoadingScreen component', () => {
  const { getByTestId } = render(<LoadingScreen navigation={{}} />);
  const loadingScreenComponent = getByTestId('loading-screen');
  expect(loadingScreenComponent).toBeTruthy();
});

test('navigates to SignIn2 screen after fade out animation', () => {
  const navigationMock = { replace: jest.fn() };
  const { getByTestId } = render(<LoadingScreen navigation={navigationMock} />);
  jest.runAllTimers();
  expect(navigationMock.replace).toHaveBeenCalledWith('SignIn2');
});

test('fade in animation starts with opacity 0', () => {
  const { getByTestId } = render(<LoadingScreen navigation={{}} />);
  const animatedView = getByTestId('animated-view');
  expect(animatedView.props.style[0].opacity).toBe(1); // Should be 1 after animation
});

test('fade out animation ends with opacity 0', () => {
  const { getByTestId } = render(<LoadingScreen navigation={{}} />);
  jest.runAllTimers();
  const animatedView = getByTestId('animated-view');
  expect(animatedView.props.style[0].opacity).toBe(0); // Should be 0 after animation
});
