// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'

it('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});