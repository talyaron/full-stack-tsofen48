import './SummaryD.css'

function SummaryD(props) {
    return (
        <div className='summaryD'>
            <div className="left">
                <button className="backButton">בהווה</button><br/>
                <button className="backButton">בהווה</button>
            </div>
            <div className="right">
         <h5>ניסיון תעסוקתי</h5>
        <p>מנכ"ל פוקס</p>
        <p>דירקטור קן השקעות</p> 
        <p>סמנכ"ל כספים מחסני חשמל</p> 
        <p>אלוף משנה 2008</p> 
        <h5>מומחיות פיננסית</h5>
        <p>מומחה בשוק ההון</p>
        <h5>השכלה</h5>
        <p>לימודי משפטים   אוניברסיטת בר אילן</p>
     <p> קורס ברמנים   בר מאסטר</p>
        <p>לימודי דת ורוח   האוניברסיטה הפתוחה</p>
        <h5>ניגוד עיניינים</h5>
        <p></p>
        </div>
        </div>
    )
}

export default SummaryD