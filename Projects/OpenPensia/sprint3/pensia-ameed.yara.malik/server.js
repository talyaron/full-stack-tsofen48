const express=require('express')
var bodyParser = require('body-parser')
const app = express();


app.use(express.static('rct/build'));
app.use(bodyParser.json())

const companies = [
    { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' },
    { logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg', name: 'פרשמרקט', par: 'קמעונאות מזון' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBGcvDXYbWULauODr04g1qY0v5TZq1rL_nw&usqp=CAU', name: 'הולמס פלייס', par: 'חדרי כושר' },
    { logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGkvo1rUEuU8g/company-logo_200_200/0/1519890596281?e=2159024400&v=beta&t=_CUC8VCcYPoTTiFFfVANK3-BrrEDskWGg2tjZPqHFIs', name: 'חילן', par: 'טכנולוגיה' },
    { logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHVAbtCWVaNsw/company-logo_200_200/0/1561277330815?e=2159024400&v=beta&t=QpnVDY0nfRwTvbnKp3ZSuZ9os0vQEIRLouSOf3TPT-E', name: 'בנק הפועלים', par: 'בנקאות' }
  ]

  app.get('/get-companieslist',(req, res)=>{
    res.send(companies)
  })


const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening',port)
})


