import React,{useState,useEffect} from 'react'
import Catcard from './Catcard'

export default function Cat(props) {
  
  
    const [data,setData]=useState('')
 
  console.log("props.limit "+props.limit)
    const Info = async()=>{
      
      const dataraw = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${props.limit}&api_key=`)
     
      const datarawparse =  await dataraw.json()
      setData(datarawparse)
     
      console.log("data : "+data)
     
    }
    useEffect(()=>{
        
            Info()
        
    },[props.limit])
  return (
   data && data.map((element)=>{
      return <>        <Catcard url={element.url} />     </>

   })
    
  )
}

