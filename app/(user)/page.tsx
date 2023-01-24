import { previewData } from "next/headers"
import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { groq } from "next-sanity"
import { client } from '../../lib/sanity.client'
import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"


const query = groq`
*[_type=='post'] {
  ...,author->,categories[]->} | order(_createdAt desc)
`


const HomePage = async () => {

if(previewData()){
  return (
  <PreviewSuspense fallback={
    <div role="status">
      <p className="text-center text-lg animate-pulse text-yellow-300">Loading Preview Data...</p>
    </div>
  }><PreviewBlogList query={query}/></PreviewSuspense>
  )
}

const posts = await client.fetch(query);


  return (
    <div>
      <BlogList posts={posts} />
    </div>
  )
}

export default HomePage