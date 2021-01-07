

let news = [

    {
        img:"https://pms.panet.co.il/online/images/articles_front/20210107/3117546_20210107175627_p2.jpg",
        main:"                            اصابة رئيس بلدية ام الفحم السابق د. سليمان اغبارية بإطلاق نار",
        sec:"علم مراسل موقع بانيت وصحيفة بانوراما ان شخصا تعرض لاطلاق نار في منطقة عين النبي في ام الفحم (قرب مكب النفايات) ، مما اسفر عن اصابته بجروح وصفت بالخطيرة "
   ,color:"blue"
    },


    {
        img:"https://pms.panet.co.il/online/images/articles_front/20210107/3117612_20210107175036_p2.jpg",
        main:"                            هذه قصة الفنانة مايا دياب مع الكعب العالي                        ",
        sec:' بعد نجاح أغنية "دوب"، أفادت مصادر فنية أن الفنانة اللبنانية ​مايا دياب​ تستعد لإصدار أغنية جديدة باللهجة المصرية ستكون من نوع مختلف عن "دوب"، '
        ,color:"red"
    },

    
    {
        img:"https://pms.panet.co.il/online/images/articles_front/20210107/3117649_20210107175211_p2.jpg",
        main:"                            تأجيل موعد دفع ضريبة القيمة المضافة لكل المصالح                        ",
        sec:" قرر مدير سلطة الضرائب عيران يعكوف ، تمديد امكانية دفع ضريبة القيمة المضافة عن شهر تشرين ثاني وكانون اول 2020 لكل المصالح حتى يوم 25.01.2021 ."
        ,color:"blue"
    },

    
    {
        img:"https://pms.panet.co.il/online/images/articles_front/20210107/3117329_20210107180037_p2.jpg",
        main:"                            صاحب محلات من ام الفحم :‘ الكورونا كالتسونامي ‘                        ",
        sec:"يعاني اصحاب المصالح التجارية في مختلف ارجاء البلدات العربية ، الامرين ، في ظل الاغلاق الثالث المفروض على البلاد ، وهو ما ادى الى تراجع حاد في مبيعاتهم ، في"
        ,color:"red"
    }
    ]   



let doms = []
news.forEach(e=>{
   var img = document.createElement("img");
   var item= document.createElement("div");
   var main = document.createElement("p");
   var sec = document.createElement("p");
    img.src = e.img;
    main.innerHTML = e.main;
    sec.innerHTML = e.sec;


    main.style.color = "white";
    sec.style.color = "white";


    item.appendChild(main);
    item.appendChild(sec);
    item.style.direction = "rtl";
    var container = document.createElement("div");
    container.appendChild(img);
    container.appendChild(item);


    container.style.display = "flex";
    container.style.marginLeft = "25%";
    container.style.backgroundColor = e.color;
    doms = [...doms , container]

})


doms.forEach(d=>{
    document.getElementsByTagName("body")[0].appendChild(d);
})

