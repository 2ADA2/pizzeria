import {useState, useEffect} from 'react';

export const ImageLoad = ({src, placeholder, ...props}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src)
        }
    }, [src]);

    return <img src={imageSrc} {...props} />;
}