import './App.css';
import React,{useState} from 'react'

import Navbar from './components/Navbar';
import Cat from './components/Cat';
import Footer from './components/Footer';


export default function App() {
//  select option
  const [selectvalue,setSelectValue]=useState(6)
  const handleOnChange=(e)=>{
    console.log(e.target.value)
setSelectValue(e.target.value)
  }

const options=[
  {
    label : "6",
    value : "6",
  },
    {
      label : "18",
      value : "18",
    },
    {
      label : "27",
      value : "27",
    },
    {
      label : "42",
      value : "42",
    }
  ]

  // theme state
  const [themeColor,setThemeColor]=useState({
    color : 'var(--color-lighttext)',
      backgroundColor : 'var( --color-light4 )',
      border : '2px solid hsl(328,38%,37%)'
  })
  const [themeColor2,setThemeColor2]=useState({
    backgroundColor : 'var( --color-light3 )',
  })
  
// functions to change theme . Buttons in Navbar Component
  const onClickDark =()=>{
   
    document.body.style.backgroundColor='#252525'
    document.getElementById('footer-para').style.color='var(--color-dark4)'
    document.getElementById('no-of-images').style.color='var(--color-dark4)'


    setThemeColor({
      color : 'var( --color-dark4 )',
      backgroundColor :'var( --color-dark2 )',
      border :'2px solid var( --color-dark1 )',
    })
    setThemeColor2({
      
      backgroundColor : 'var( --color-dark0 )',
    })

  }

  const onClickLight =()=>{
    document.body.style.backgroundColor='#F4E7FB'
    document.getElementById('footer-para').style.color='var(--color-lighttext)'
    document.getElementById('no-of-images').style.color='var(--color-lighttext)'
   


    setThemeColor({
      color : 'var(--color-lighttext)',
      backgroundColor : 'var( --color-light4 )',
      border : '2px solid hsl(328,38%,37%)'
    })
    setThemeColor2({
      backgroundColor : 'var( --color-light3 )',
    })
  } 
  
 
  return (
    <>
   <Navbar themeColor={themeColor} themeColor2={themeColor2} onClickLight={onClickLight} onClickDark={onClickDark}  />
   <div id='no-of-images' className='select-div'>
    No of Images :  
   <select onChange={handleOnChange}>
    {options.map((option)=>(
      <option value={option.value}>{option.label}</option>
    ))}
   </select>
   </div>

      <div  className='app-div'>
     <Cat  limit={selectvalue}/>
     </div>
     <Footer  themeColor={themeColor} themeColor2={themeColor2} />
   </>
  )
}
