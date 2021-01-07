
articles = [{
    title: "                            هبوعيل اكسال يعزز موقعه في القمة بفوز ثالث على التوالي                        ",
    subTitle: "فوز ثالث على التوالي حققه الليلة فريق هبوعيل اكسال على حساب الهابط من الدرجة العليا سكتسيا نيس تسيونا بهدفين دون مقابل، في المباراة التي جمعتهما ",
    image: "https://pms.panet.co.il/online/images/articles_front/20210107/3117960_20210107233858_p2.jpg", 
    bgcolor: "#d10606"
},
{
    title: "                            د. سعيد :‘ من السهل الوصول الى تطعيم للطفرات الجديدة ‘                        ",
    subTitle: " عبّر علماء بريطانيون عن قلقهم من سلالة كورونا الجنوب افريقية ، مؤكدين انها أكثر خطورة ، فيما قال خبراء انهم يتخوفون من عدم فعالية اللقاح ضدها .",
    image: "https://pms.panet.co.il/online/images/articles_front/20210107/3117832_20210107214423_p2.jpg", 
    bgcolor: "#133272"
},
{
    title: "دينا الشربيني وإلهام شاهين تفتتحان سينما 2021",
    subTitle: "خريطة سينمائية مختلفة تفتتح عام 2021 بين ظروف الكورونا ونسبة تشغيل دور العرض السينمائي وبين أفلام مؤجلة وأخرى تحاول البحث عن مكان وسط الخريطة",
    image: "https://pms.panet.co.il/online/images/articles_front/20210106/3115771_20210106213907_p2.jpg", 
    bgcolor: "#d10606"
},
{
    title: "                            ما حقيقة اعتزال يسرا التمثيل بعد الشفاء من كورونا ؟                        ",
    subTitle: "  نفى مصدر مقرب من الفنانة يسرا كل ما تردد طوال الساعات الماضية عن اتخاذها قرارا باعتزال التمثيل والتفرغ للعبادة، إذا منّ الله عليها بالشفاء من فيروس كورونا، واستطاعت ",
    image: "https://pms.panet.co.il/online/images/articles_front/20210107/3117630_20210107233656_p2.jpg", 
    bgcolor: "#222222"
}]

articles.forEach(
    
    e => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let subtitle = document.createElement("h4");
    let mainDiv = document.createElement("div");

    title.innerText = e.title;
    subtitle.innerText = e.subTitle;
    img.src = e.image;
    div.style.marginTop = "5px";
    div.style.marginBottom = "15px";
    div.style.display = "flex";
    div.style.marginLeft = "15%";
    
    title.style.paddingRight = "3.5px";
    subtitle.style.paddingRight = "3.5px";
    title.style.color = "white";
    subtitle.style.color = "white";
    
    mainDiv.style.backgroundColor = e.bgcolor;
    mainDiv.style.display = "absolute";
    mainDiv.style.width = "65%";
    mainDiv.style.height = "60%";
    mainDiv.style.textAlign = "right";

    div.appendChild(img);
    div.appendChild(mainDiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(subtitle);
   
    document.getElementsByTagName("body")[0].appendChild(div);
});