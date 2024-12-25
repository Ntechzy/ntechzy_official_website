import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

 
const a = process.env.PANK

const client = createClient({
    projectId: 'yc9r5w1z',
    dataset: 'blogs',
    apiVersion: '2024-12-24',
    useCdn: true,
    token: a,
});


 


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
