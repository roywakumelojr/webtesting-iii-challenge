// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls'

it('Checks if the gate control buttons are available for the user', () => {
    render (<Controls />)
})