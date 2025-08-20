import { useEffect, useState } from 'react';

// Function to fetch data from an API
export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

// Custom hook for managing form state
export const useForm = (initialValues: Record<string, any>) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return { values, handleChange };
};

// Utility function to format currency
export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Default export of utility functions
export default {
    fetchData,
    useForm,
    formatCurrency,
};