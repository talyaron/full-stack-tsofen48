
const parliamentaryTools = [
    {
      title: "שאילה רגילה",
      content: "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים ."
    },
    {
      title: "נאום בן דקה",
      content: "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)"
    },
    {
      title: "כינוס הכנסת בזמן הפגרה",
      content: "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום"
    }
  ];

  exports.getParliamentaryTools =  (req, res) => {

    // res.cookie('role', 'admin', { maxAge: 90000000000, httpOnly: true });


    res.send({ success:true,err:null,info:{parliamentaryTools} });


};