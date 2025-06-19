import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../src/landing_page/Navbar.jsx';

describe('Navbar Component', () => {
    it('renders Navabar logo', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', 'media/image/logo.svg');
    });

    it('renders Navbar Links', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const signupLink = screen.getByText('Signup');
        const aboutLink = screen.getByText('About');
        const productLink = screen.getByText('Product');

        
        expect(signupLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(productLink).toBeInTheDocument();
    });

    it('renders Navbar Links', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const pricingLink = screen.getByText('Pricing');
        const supportLink = screen.getByText('Support');

        expect(pricingLink).toBeInTheDocument();
        expect(supportLink).toBeInTheDocument();
    });

    it('renders Navbar with correct classes', () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toHaveClass('navbar');
        expect(navbar).toHaveClass('navbar-expand-lg');
        expect(navbar).toHaveClass('border-bottom');
    });
});