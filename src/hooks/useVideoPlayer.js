import axios from 'axios';
import {
    useEffect,
    useState
} from 'react'

const useVideoPlayer = (videoId) => {
    const [video, setVideo] = useState('');

    useEffect(() => {
        axios.get(`https://affshop-backend-production.up.railway.app/api/getVideo/${videoId}`)
            .then(response => {
                setVideo(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            })
    }, [videoId]);

    return video

}

export default useVideoPlayer;