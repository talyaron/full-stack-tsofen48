import React from 'react'
import AllBars from './AllBars'


const barsArr =[
  {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
     tittle:"בנק הבועלים",
     description:"בנקאות"
    },
    {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
     tittle:"בנק הבועלים",
     description:"בנקאות"
    },
    {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
    tittle:"בנק הבועלים",
    description:"בנקאות"
   },
   {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
   tittle:"בנק הבועלים",
   description:"בנקאות"
  },
  {  imageSource:"https://biz2.bankhapoalim.co.il/CAClientPages/ca/newLogin_files/smart-app-banner/images/smart-banner.png",
  tittle:"בנק הבועלים",
  description:"בנקאות"
 }
]

export default function App() {
  return (
    <div dir="rtl" id="continer">
      <AllBars barsArr={barsArr}  />
    </div>
  )
}
