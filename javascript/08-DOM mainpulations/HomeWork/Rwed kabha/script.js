var ad = [
  {
    title: "نتنياهو يطلب تأجيل جلسة رده على لائحة الاتهام ضده ",

    subTitle:
      "قدم محامو الدفاع عن نتنياهو طلبا للمحكمة بتأجيل جلسة الاستماع الى رده على لائحة الاتهام للشهر القادم ، وفسر المحامون السبب بتقديم هذا الطلب بان لائحة الاتهام",
    img:
      "https://pms.panet.co.il/online/images/articles_front/20210106/3116420_20210106203325_p2.jpg",
    color: "#d10606",
  },
  {
    title: "أولا بأول : اتحاد ابناء سخنين يواجه مكابي نتانيا ( 0-1 )",

    subTitle:
      "ضمن مباريات دوري الدرجة العليا الدوري الاسرائيلي الاسبوع الخامس عشر من بداية الدوري الدرجة العليا الإسرائيلي ، يلتقي الان على استاد الدوحة البلدي ",
    img:
      "https://pms.panet.co.il/online/images/articles_front/20210106/3116391_20210106211440_p2.jpg",
    color: "#133272",
  },
  {
    title: "الفنانة التونسية درة بإطلالة عفوية لافتة بالأبيض", subTitle: "شاركت الممثلة التونسية درة مجموعة صور جديدة في صفحتها الخاصة، بإطلالة كاجوال مرتدية ملابس رياضية باللون الأبيض، من دون وضع ماكياج وتاركةً شعرها منسدلاً ", img: "https://pms.panet.co.il/online/images/articles_front/20210106/3115738_20210106193734_p2.jpg", color: "#d10606",
  },
  {
    title: "مسيحيو اليونان يخالفون قيود كورونا ويقيمون قداس الغطاس",

    subTitle:
      "في تحد للقيود التي فرضتها الحكومة اليونانية لاحتواء فيروس كورونا ، أقامت الكنائس قداس عيد الغطاس رغم القواعد التي تحظر التجمعات العامة بما فيها ",
    img:
      "https://pms.panet.co.il/online/images/articles_front/20210106/3116372_20210106195111_p2.jpg",
    color: "#222222",
  },
];

ad.forEach((elm) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = elm.img;
  let h1 = document.createElement("h3");
  let h5 = document.createElement("h5");
  h1.innerText = elm.title;
  h1.style.right = "2px"
  h5.innerText = elm.subTitle;
  h1.style.display = "flex";
  h1.style.justifyContent = "flex-end";
  h5.style.display = "flex";
  div.style.background = elm.color;
  h1.style.color = "#FFFFF2";
  h5.style.color = "#FFFFF1";
  let smDiv = document.createElement("div");
  smDiv.appendChild(h1);
  smDiv.appendChild(h5);
  div.appendChild(img);
  div.appendChild(smDiv);
  div.style.marginLeft = "30vw";
  div.style.marginTop = "20px";
  div.style.display = "flex";
  div.style.width = "700px";
  div.style.height = "110px";
  document.getElementsByTagName("body")[0].appendChild(div);
});
