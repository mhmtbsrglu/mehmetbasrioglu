import React from 'react'
import { Blog } from '../Blogs'

const BlogCard = (props: Blog) => {
  return (
    <a href={`/blog/${props._id}`} className="overflow-hidden lg:w-[30%] sm:w-full my-5  rounded-lg shadow-lg bg-softbg hover:border-primarybg border-2 border-transparent">
        <article >

    <img alt="Placeholder" className="block w-full h-52 object-cover" src={props.mainImage.asset.url}/>

<header className="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 className="text-lg">
        <a className=" text-white font-semibold" >
            {props.title}
        </a>
    </h1>
</header>

<footer className="flex items-center leading-none p-2 md:p-4 relative">
        <img alt="Placeholder" className="block rounded-full w-8 h-8 object-cover" src={props.author.image.asset.url}/>
        <p className="ml-2 text-sm text-white">
        {props.author.name}
        </p>
</footer>

</article>
    </a>
  )
}

export default BlogCard