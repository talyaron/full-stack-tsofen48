import './App.css';

import Head from './components/Head.js';
import Info from './components/Info.js';

const _titleData = _getData();

function App() {
  
  return(

    <div className="App">
        <div>
          <Head/>
        </div>
       <div className ="inside">
          <Info _data={_titleData} />
        </div>

    </div>
  );

}
export default App;

function _getData() {
  return [
    { title: "שאילתה רגילה",
      info: "שאלה לשר על עניין שבתחום תפקדיו, אותה מפנה חבר כנסת, שאינו שר או סגן שר. התשובה לשאילתה תינתן במליאת הכנסת. על השר להשיב תוך 21 ימים."
    },
    { title: "נאום בן דקה",
      info: "נאום של חבר כנסת, בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו״ר הכנסת או סגן יו״ר הכנסת המנהלים את הישיבה בפועל)."
    },
    { title: "כינוס הכנסת בזמן הפגרה",
      info: "הגשת דרישה ליו״ר הכנסת על ידי 25 ח״כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום."
    }];
}
