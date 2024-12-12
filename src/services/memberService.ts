import apiClient from './apiClient';

export const getMemberData = async () => {
    try {
        const response = await apiClient.get('/member/');
        return response.data;
    } catch (error) {
        console.error('Error fetching member data:', error);
        throw error;
    }
};
