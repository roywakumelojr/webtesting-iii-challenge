// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display'

it('The Display Renders Successfully', () => {
    render (<Display />)
})

it('Checks if the gate is locked', () => {
    const { getByText } = render(<Display />);
    getByText (/Locked/i);
})

it('Checks if the gate is unlocked and open', () => {
    const { getByText } = render(<Display />);
    getByText (/Unlocked/i);
    getByText (/Open/i);
})

it('Displays green led when the gate is unlocked ', () => {
    const unlockedIndicator = render(<Display locked={false} />);
    const unlocked = unlockedIndicator.getByText(/locked/i);
    expect(/green-led/.test(unlocked.className)).toBe(true);
    expect(/red-led/.test(unlocked.className)).toBe(false)
})

it('Displays red led when the gate is locked ', () => {
    const lockedIndicator = render(<Display locked={true} />);
    const locked = lockedIndicator.getByText(/locked/i);
    expect(/green-led/.test(locked.className)).toBe(false);
    expect(/red-led/.test(locked.className)).toBe(true)
})

it('Displays green led when the gate is open ', () => {
    const openIndicator = render(<Display locked={false} />);
    const open = openIndicator.getByText(/locked/i);
    expect(/green-led/.test(open.className)).toBe(true);
    expect(/red-led/.test(open.className)).toBe(false)
})

it('Displays red led when the gate is closed ', () => {
    const closedIndicator = render(<Display closed={true} />);
    const closed = closedIndicator.getByText(/closed/i);
    expect(/green-led/.test(closed.className)).toBe(false);
    expect(/red-led/.test(closed.className)).toBe(true)
})