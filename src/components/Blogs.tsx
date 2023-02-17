import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import {client} from "../client";
type Props = {};

export interface Blog{
    _id:string;
    title:string,
    mainImage: any,
    author:any,
    cover?:string
    body?:any,
    bio?:any
}

const Blogs = (props: Props) => {
    const [blogs,setBlogs] = React.useState<Blog[]>([])
    React.useEffect(() => {
        fetchRecords()
    },[client])
    const fetchRecords = () => {
        
        client.fetch(
            `*[_type == "post"] {
              _id,
                title,
                slug,
                body,
                  author -> {
                    name,
                    image{
                      asset ->{
                        url
                      }
                    }
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
            setBlogs(data)
        })
    }
  return (
    <div className="my-40">
      <div className="flex items-center justify-between p-4 my-10">


<div className="text-3xl font-semibold my-5 text-primary">Blog Listesi</div>
      </div>

      <div className="flex flex-wrap  justify-around">
        {blogs.map((data:Blog) => {
          return <BlogCard title={data.title} mainImage={data.mainImage} author={data.author} _id={data._id}/>;
        })}
        <div className="w-[30%] my-5" />
        <div className="w-[30%] my-5" />
      </div>
    </div>
  );
};

export default Blogs;
