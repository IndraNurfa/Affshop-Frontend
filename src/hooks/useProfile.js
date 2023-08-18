import {
    useEffect,
    useState
} from 'react';
import axios from 'axios';

const useProfile = () => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        axios.get('https://affshop-backend-production.up.railway.app/api/getProfile', {
                withCredentials: true,
            })
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching session:', error);
            });
    }, []);

    return profile;
}

export default useProfile;