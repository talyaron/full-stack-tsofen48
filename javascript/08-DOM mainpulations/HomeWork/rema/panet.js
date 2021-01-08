articles = [{title:"نتنياهو يطلب تأجيل جلسة رده على لائحة الاتهام ضده", subTitle:"قدم محامو الدفاع عن نتنياهو طلبا للمحكمة بتأجيل جلسة الاستماع الى رده على لائحة الاتهام للشهر القادم ، وفسر المحامون السبب بتقديم هذا الطلب بان  لائحة الاتهام", image:"https://pms.panet.co.il/online/images/articles_front/20210106/3116420_20210106203325_p2.jpg",color:"#d10606"},
{title:"أولا بأول : اتحاد ابناء سخنين يواجه مكابي نتانيا ( 0-1 )", subTitle:"ضمن مباريات دوري الدرجة العليا الدوري الاسرائيلي الاسبوع الخامس عشر من بداية الدوري الدرجة العليا الإسرائيلي ، التقى على استاد الدوحة البلدي", image:"https://pms.panet.co.il/online/images/articles_front/20210106/3116391_20210106220842_p2.jpg", color:"#133272"},
{title:"دينا الشربيني وإلهام شاهين تفتتحان سينما 2021", subTitle:"خريطة سينمائية مختلفة تفتتح عام 2021 بين ظروف الكورونا ونسبة تشغيل دور العرض السينمائي وبين أفلام مؤجلة وأخرى تحاول البحث عن مكان وسط الخريطة", image:"https://pms.panet.co.il/online/images/articles_front/20210106/3115771_20210106213907_p2.jpg", color:"#d10606"},
{title:"مسيحيو اليونان يخالفون قيود كورونا ويقيمون قداس الغطاس", subTitle:"في تحد للقيود التي فرضتها الحكومة اليونانية لاحتواء فيروس كورونا ، أقامت الكنائس قداس عيد الغطاس رغم القواعد التي تحظر التجمعات العامة بما فيها", image:"https://pms.panet.co.il/online/images/articles_front/20210106/3116372_20210106195111_p2.jpg",color:"#222222"}]

articles.forEach(element => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let subtitle = document.createElement("h5");
    let box = document.createElement("div");

    img.src = element.image;
    title.innerText = element.title;
    subtitle.innerText = element.subTitle;

     // style for title and subtitle
     title.style.color = "white";
     subtitle.style.color = "white";
     title.style.paddingRight = "5px";
     subtitle.style.paddingRight = "5px";
   
     // style for div
    div.style.display = "flex";
    div.style.marginLeft = "25%";
    div.style.marginTop = "10px";

    // style for box
    box.style.width = "55%";
    box.style.height = "70%";
    box.style.backgroundColor = element.color;
    box.style.display = "absolute";
    box.style.textAlign = "right";

    box.appendChild(title);
    box.appendChild(subtitle);
    div.appendChild(img);
    div.appendChild(box);
    document.getElementsByTagName("body")[0].appendChild(div); //This wouldn't work, if the DOM will change
});