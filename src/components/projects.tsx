//import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './card'
const data=[
    {
        id:0,
        title:"Admission form",
        desc:"A HTML and typescript based app for managing and organization projects",
        img:"/Admission form new.jpg",
        tags:["HTML","CSS","Typescript","Node"],
    },
    
    {
        id:1,
        title:"Food blog",
        desc:"A HTML and typescript based app for managing and organization projects",
        img:"/food 1.jpg",
        tags:["HTML","CSS","Typescript","Node"],
    },
    {
        id:2,
        title:"Panacloud css",
        desc:"A HTML ,Nextjs and typescript based app for managing and organization projects",
        img:"/panacloud final.JPG",
        tags:["HTML","CSS","Typescript","Node","Nextjs"],
    },
    
    {
        id:3,
        title:"Panacloud website",
        desc:"A HTML ,Nextjs and typescript based app for managing and organization projects",
        img:"/panacloud21.jpg",
        tags:["HTML","CSS","Typescript","Node","Nextjs"],
    },
    
    


]

const projects = () => {
  return (
    <div id ="projects" className='container pt-32'>
      <Heading title='My projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
      {data.map((el)=>(<Card
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
        
      
      


      />))}  
      </div>
    </div>
  )
}

export default projects
