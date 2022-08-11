import { useState, useEffect} from 'react';
import { STORY_INCREEMENT, MAX_STORIES } from '../constants';
import { debounce } from '../utils/debounce.js'
  
export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INCREEMENT);

    const handleScroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop
             !== document.documentElement.offsetHeight || loading){
                return false
             }

             setLoading(true);
    }, 500);
    
    useEffect(() => {
        if(!loading) return;
        if(count + STORY_INCREEMENT >= MAX_STORIES){
            setCount(MAX_STORIES);
        }else{
            setCount(count + STORY_INCREEMENT);
        }
        setLoading(false);
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return { count }
    
}