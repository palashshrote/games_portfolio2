import noImage from '../assets/no-image.png';

const getCroppedImageUrl = (src: string) => {
    if(!src)    return noImage;
    const div = src.split("media/");
    const newUrl = div[0] + "media/crop/600/400/" + div[1];
    return newUrl;
}

export default getCroppedImageUrl