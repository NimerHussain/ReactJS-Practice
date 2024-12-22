import React from 'react'
import './App.css'
// import { Student } from './Components/Students/Student'
import { Card } from './Components/Students/Card/Card'

export const App = () => {
  // let arr =["Nimer","Kashan","Talha","Zulfiqar"]
  let arr=[
    {
    id: 1,
    imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
    desc: "User",
    title: "Nimer Hussain"
  },
  {
    id: 1,
    imgSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s",
    desc: "User",
    title: "Nimer Hussain"
  }
]

  return(
    <> 
    {/* <h1>App</h1> */}
    {arr ? (
      arr.map((e,i)=>{
        return(
         <Card  key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />
        )
      })
    ) : (
      <h1>Data Not fetch</h1>
    )}

    </>
)



//   return (
//     <>
   

//     )}
//       {/* <Student stdName ="Nimer" stdAge= {18} isStudent = "Active"/>
//       <Student stdName ="Talha" stdAge= {19} isStudent = "Sust"/>
//       <Student stdName ="Kashan" stdAge= {20} isStudent = "Fast"/> */}
//       <Card  />


//     </>
//   )
//
}

export default App