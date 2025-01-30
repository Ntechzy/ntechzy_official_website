import React from 'react'
import client, { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { components } from '@/lib/sanityComponent';

const fetchData = async (id) => {

    const query = `*[_type=="post" && slug.current == "${id}" ]| order(_createdAt desc)[0...3] {
                    "currentSlug":slug.current,
                        title, 
                        mainImage,
                        short_description,
                        "categories": categories[]->title,
                        body,
                        publishedAt
                    }[0]`
    const res = await client.fetch(query);
    return res
}
const page = async ({ params }) => {

    const id = await params
    const data = await fetchData(id.slugs)
    const value = data.body
    console.log(data)


    return (
        <div>
            <div className='mx-4'>
                <div className='text-[#7A7A7A] max-w-[860px] m-auto flex flex-col'>
                    <h5>
                        Posted by {data?.author || "Admin"}
                    </h5>
                    <h5>
                        in <span className='text-secondary'>
                            {data?.categories?.join(" ") || "Technology"}
                        </span>
                    </h5>
                    <h2 className='text-[24px] md:text-[36px] mt-[25px] font-[600] text-white'>
                        {data?.title}
                    </h2>
                </div>

                <div className='mt-[50px]'>
                    <div className='h-auto bg-white rounded-xl overflow-hidden md:h-[100vh] w-full'>
                        <img className='h-full w-full object-cover' src={urlFor(data?.mainImage)?.url()} alt="" />
                    </div>

                    <div className=''>
                        <PortableText value={value} components={components} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page