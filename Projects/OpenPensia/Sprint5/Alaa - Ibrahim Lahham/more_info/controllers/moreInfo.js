var bodyParser = require("body-parser");
app.use(bodyParser.json());

const articles = [
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    }
];

const navTabs = [
    {
        className: 'non-active-nav',
        href: '#',
        content: 'סיכום פרטים'
    },
    {
        className: 'active-nav',
        href: '#',
        content: 'עוד מידע'
    },
    {
        className: 'non-active-nav',
        href: '#',
        content: 'נתוני הצבעה'
    }
];

const candidatesInfo = [
    {
        name: "עיסאווי פריג'",
        imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
        companyName: 'בנק הפועלים'
    }
];
  
  
  exports.getArticles =  (req, res) => {
    res.send({articles});
};

exports.getNavTabs =  (req, res) => {
    res.send({navTabs});
};

exports.getCandidateInfo =  (req, res) => {
    console.log("am in candidate controller");
   // const { candidateName } = req.body;
  
   // let index = candidatesInfo.findIndex(candidate => candidate.name.indexOf(candidateName) > -1);
  //  if (index >= 0) {
        res.send(candidatesInfo);
   // } else {
     //   res.send({ ok: false });
   // }
};