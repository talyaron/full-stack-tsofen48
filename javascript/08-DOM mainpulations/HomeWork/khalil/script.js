articles = [{title:'ترامب يعترف بفوز بايدن بعد يوم من اقتحام الكونجرس', subTitle:'blaاعترف الرئيس الأمريكي دونالد ترامب يوم الخميس وللمرة الأولى، بأن جو بايدن سيكون الرئيس القادم للولايات المتحدة، وذلك بعد يوم من اقتحام أنصار ترامب لمبنى ... bal', image:'https://pms.panet.co.il/online/images/articles_front/20210108/3118078_2021010862656_p2.jpg', color:'#d10606'},
{title:'الفنانة ليال عبود تعيش حالة من القلق', subTitle:' أكدت معلومات فنية أن الفنانة اللبنانية ليال عبود تعيش حالة من القلق على والدتها التي أصيبت بأزمة صحية قبل أيام، و تتولى هي شخصياً رعايتها في منزلها،', image:'https://pms.panet.co.il/online/images/articles_front/20210107/3117656_2021010861721_p2.jpg', color:'#133272'},
{title:'حالة الطقس : أجواء دافئة وصافية نهارا وباردة ليلا', subTitle:'يتوقع الراصد الجوي اليوم الجمعة، ألا يطرأ تغيير يذكر على درجات الحرارة التي تكون فوق معدلاتها بنحو 4-6 درجات . ويسود طقس بارد نسبياً في ساعات ...', image:'https://pms.panet.co.il/online/images/articles_front/20210108/3118092_2021010862432_p2.jpg', color:'#d10606'},
{title:'أستون فيلا يواجه ليفربول بفريق الرديف', subTitle:'يستعد ليفربول لمواجهة أستون فيلا، ضمن منافسات الدور الثالث من بطولة كأس الاتحاد الإنجليزي، مساء اليوم الجمعة، ولكن اللقاء تُحيط به شكوك كبيرة، في ظل ...', image:'https://pms.panet.co.il/online/images/articles_front/20210108/3118063_2021010862759_p2.jpg', color:'#222222'}];

articles.forEach(e => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let subTitle = document.createElement("h5");
    let wrapper = document.createElement("div");
    
    title.innerText = e.title;
    subTitle.innerText = e.subTitle;
    img.src = e.image;
    wrapper.style.backgroundColor = e.color;

    title.style.color = "#ffffff";
    subTitle.style.color = "#ffffff";
    div.style.display = "flex";
    div.style.marginLeft = "25%";
    div.style.marginTop = "8px";
    wrapper.style.textAlign = "right";
    wrapper.style.width = "60%";
    wrapper.style.display = "absolute";
    wrapper.style.padding = "8px";

    div.appendChild(img);
    div.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(subTitle);
    document.getElementsByTagName("body")[0].appendChild(div);
});