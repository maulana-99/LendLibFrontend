import apiClient from './apiClient';

export const getBorrowData = async () => {
    try {
        const response = await apiClient.get('/borrow/');
        return response.data;
    } catch (error) {
        console.error('Error fetching borrow data:', error);
        throw error;
    }
};
