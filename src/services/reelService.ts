import axios from 'axios';
import { FUNCTIONS_BASE_URL } from '../utils/constants';

const getReelDownloadLink = async (url: string) => {
    try {
        const response = await axios.post(`${FUNCTIONS_BASE_URL}insta-reel-download-link`, null, { params: { url } });
        return response.data.downloadLink;
    } catch (error) {
        throw new Error('Error fetching reel download link');
    }
};

export { getReelDownloadLink };
