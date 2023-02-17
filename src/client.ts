import sanityClient from "@sanity/client"


const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;
const dataset = import.meta.env.VITE_REACT_APP_DATASET!;
export const client = sanityClient({
    projectId,
    dataset,
    useCdn:true,
    apiVersion: '2021-08-31', // use a UTC date string
})