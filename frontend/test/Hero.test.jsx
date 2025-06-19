import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../src/landing_page/home/Hero.jsx';
// vitest.setup.js


describe('Hero Component', () => {
    it('render Hero image', () => {
        render(<Hero />);
        const image = screen.getByAltText('not found');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'media/image/homeHero.png');
        // expect(screen.getByAltText("not found")).toBeInTheDocument();
        expect(screen.getByText('Invest in everything')).toBeInTheDocument();
    });

    it('Test button', () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', {name: /Sign up for free/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn-primary');
        //expect(screen.getByText('Invest in everything')).toBeInTheDocument();
    });
}); 