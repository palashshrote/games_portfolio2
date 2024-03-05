// interface Props{
//     src: string;
// }
const getCroppedImageUrl = (src: string) => {
    const div = src.split("media/");
    const newUrl = div[0] + "media/crop/600/400/" + div[1];
    return newUrl;
}

export default getCroppedImageUrl