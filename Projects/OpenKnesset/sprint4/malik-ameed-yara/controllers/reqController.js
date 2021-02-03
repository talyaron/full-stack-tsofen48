const requestitemslist = [
  {
    date: "21.11.20",
    name: "נאום בן דקה",
    title: "סגירת מרכולים בבני ברק",
    dateSend: "21.11.20",
    Courage: "בין אדם אמיץ",
    fullInstruction: "דבר שמתאים לתא הזה",
    Wasread: "דבר שמתאים לתא הזה",
    content: "blablablabalbalaaaa",
  },
  {
    date: "22.11.20",
    name: "נאום בן שתי  דקה",
    title: "מענק לעסקים הקורסים",
    dateSend: "21.11.21",
    Courage: "בין אדם יותר יותר אמיץ",
    Wasread: "עוד דבר שמתאים לתא הזה",
    content: "השבוע נודע לי כי.......",
  },
];

exports.getAllPosts = (req, res) => {
  // jsend format
  res.send({
    status: "success",
    rawdata: {
      requestitemslist
    },
  });
};
