import './content.css'
import Block from '../blocks/block'

function content() {
    return (
        <div className="content">
          <Block title='שאילתה רגילה' text='שאלה לשר על שבתחום תפקידו , אותה מפנה חבר כנסת שאינו או סגן שר. התשובה לשאילה תינתן במליאת הכנסת. על השר להגיש חוך 21 ימים.' />
          <Block title=' נאום בן דקה' text='נאום של חבר כנסת ,בכל נושי=א ובארןך של בדיקה(תלוי בטוב ליבו של יו"ר הכנסת או סגל יו"ר הכנסת המנהלים את הישיבה בפועל)' />
          <Block title='כינוס הכנסת בזמן הפגעה' text='הדשה דרישה ליו"ר הכנסת על ידי ח"כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום.' />

        </div>
    );
}

export default content;