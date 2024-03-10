import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const downloadReel = async (reelUrl: string): Promise<string> => {
    try {
        const response = await axios.post(`${BASE_URL}download`, { url: reelUrl });
        return response.data.downloadLink;
    } catch (error) {
        throw new Error('Error downloading reel. Please check the URL and try again.');
    }
};
