import { useState } from 'react';
import { downloadReel } from '../services/reelService';

const ReelDownloader: React.FC = () => {
    const [reelUrl, setReelUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');
    const [error, setError] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReelUrl(event.target.value);
    };

    const handleDownload = async () => {
        try {
            const link = await downloadReel(reelUrl);
            setDownloadUrl(link);
            setError('');
        } catch (err: any) {
            setError(err.message);
            setDownloadUrl('');
        }
    };

    return (
        <div>
            <h1>Instagram Reel Downloader</h1>
            <input
                type="text"
                placeholder="Paste Instagram Reel URL"
                value={reelUrl}
                onChange={handleChange}
            />
            <button onClick={handleDownload}>Download</button>
            {error && <p>{error}</p>}
            {downloadUrl && (
                <div>
                    <p>Download Link:</p>
                    <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                        {downloadUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default ReelDownloader;
