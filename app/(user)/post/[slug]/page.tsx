import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
};

const Post = async ({params: {slug}}: Props) => {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,author->,categories[]->
    }
    `;

    const post: Post = await client.fetch(query, { slug });
    console.log(post);

  return (
    <article className="mt-10"><section className="space-y-2 border-yellow-300 text-black">
        <div className="relative">
            <div className=" absolute min-h-56 flex flex-col md:flex-row justify-between w-full h-full opacity-10 blur-sm p-10">
                <Image className="object-cover object-center mx-auto" src={urlFor(post.mainImage).url()} alt={post.author.name} fill />
            </div>
            <section className="p-5 bg-yellow-300 w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5 z-20 text-black">
                    <div>
                        <h1 className="text-4xl font-extrabold">
                            {post.title}
                        </h1>

                        <p>
                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image className="rounded-full" src={urlFor(post.author.image).url()} alt={post.author.name} height={100} width={100} />

                        <div>
                            <h3>{post.author.name}</h3>
                            <div>{/* TODO */}</div>
                        </div>

                    </div>

                </div>
                <div>
                    <h2 className="italic pt-10">{post.description}</h2>
                    <div className="flex items-center justify-end space-x-2 my-auto">
                        {post.categories?.map((category) => (
                            <p key={category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                {category.title}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        </section>
        

            <PortableText value={post.body} components={RichTextComponents}/>
        </article>
  )
}

export default Post;