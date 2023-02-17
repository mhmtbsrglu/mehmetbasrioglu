import React from 'react'
import { client } from '../../client'
import { Blog } from '../Blogs'
import PortableText from "react-portable-text"
import writing from "../../assets/writing.png"
import { useParams } from 'react-router-dom'
type Props = {}
const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;
function BlogDetail({}: Props) {
    const [blogs,setBlogs] = React.useState<Blog | null >(null)
    const {id} = useParams();
    React.useEffect(() => {
        fetchRecords()
    },[client])
    const fetchRecords = () => {
        
        client.fetch(
            `*[_type == "post" && _id == "${id}"] {
                _id,
                              title,
                              slug,
                              body,
                                author -> {
                                  name,
                                  slug,
                                  image{
                                    asset ->{
                                      url
                                    }
                                  },
                                  bio
                                },
                              mainImage{
                                  asset -> {
                                      _id,
                                      url
                                  },
                                  alt
                              }
                          }`
        ).then((data:any) => {
            setBlogs(data[0])
            console.log(data[0])
        })
    }

  return (
    <div className='container my-48 pl-10 pr-10 flex flex-col'>
        {
            blogs?.body && <div >
                <img src={blogs?.mainImage.asset.url} className="w-full h-96 object-cover" />
            <PortableText content={blogs?.body} className="my-10"
            projectId={projectId}
            dataset="production"
                  serializers={{
                      h1: (props: any) => <h1 className='text-3xl font-semibold text-white my-5' {...props} />,
                      link: ({ children }: any) => <a href={children} className="text-blue-400 font-semibold hover:underline">{children}</a>,
                      ol: ({ children }: any) => <ol className="special-list-item">{children}</ol>,
                      ul: ({ children }: any) => <ul className="special-list-item list-disc">{children}</ul>,
                      h3: ({ children }: any) => <br/>,
                  }} /></div>
        }
        {
            blogs?.author.bio && <div className='border-t-2 border-gray-800 inline-block py-10 text-gray-400'>
            <div className='flex gap-2'>
                <img src={blogs?.author.image.asset.url} className="w-10 h-10 object-cover rounded-full"/>
                <div className='flex-col flex flex-1'>
                    <span className='font-semibold text-white'>{blogs.author.name}</span>
                    <span>{blogs.author.slug.current}</span>
                </div>
            </div>
            <span className='text-white font-semibold mt-5 inline-block'>Hakkında</span>
            <PortableText content={blogs?.author.bio} className=""
                      serializers={{
                          h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
                          link: ({ children }: any) => <a href={children} className="text-blue-400 font-semibold">{children}</a>,
                          li: ({ children }: any) => <li className="special-list-item">{children}</li>,
                          bullet: ({ children }: any) => <li className="special-list-item">{children}</li>,
                      }} />
            </div> 
        }
    </div>
  )
}

export default BlogDetail