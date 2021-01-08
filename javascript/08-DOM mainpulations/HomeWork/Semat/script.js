// articles = [{title:'bla', subTitle:'bla bal', image:'img source', background-color:'blue'}]

articles = [
    {title:'الكلية الأكاديمية العربية للتربية في حيفا تشهد مؤتمر قسم الارشاد التربوي',
     subTitle:'بمشاركة أكثر من 700 من المحاضرين والمرشدين والمفتشين ومسؤولي وزارة التربية والطالبات والطلاب شهدت الكلية الأكاديمية العربية للتربية ',
     image:'https://pms.panet.co.il/online/images//articles/2021/01/07-01-2021/karam/021/007.jpg',
     backgroundcolor: 'blue'}
    ,{title:'الديمقراطيون بمجلس النواب الأمريكي يتحركون لمساءلة ترامب',
    subTitle:'قال العضو الديمقراطي بمجلس النواب الأمريكي ديفيد سيسيلاين إن النواب الديمقراطيين وزعوا مواد مساءلة الرئيس يوم الخميس',
    image:'https://pms.panet.co.il/online/images//articles/2021/01/07-01-2021/SHARIF/25/GettyImages-1188134603.jpg',
    backgroundcolor:'red'}
    ,{title:'ريال مدريد يُقرب برشلونة من محمد صلاح!',
    subTitle:'يقرب نادي ريال مدريد الإسباني غريمه ومواطنه برشلونة من التعاقد مع النجم المصري محمد صلاح، لاعب فريق ليفربول الإنجليزي في الفترة المقبلة.',
    image:'https://pms.panet.co.il/online/images//articles/2021/01/07-01-2021/SHARIF/24/GettyImages-1294490871.jpg',
    backgroundcolor:'blue'}
    ,{title:'جت المثلث تفجع بوفاة الطفلة ريتال ناطور',
    subTitle:'فجعت قرية جت المثلث مساء اليوم الخميس بخبر وفاة الطفلة ريتال ناطور (12 عاما)، حيث قامت طواقم الإسعاف بعمليات انعاش للطفلة لكن دون جدوى ، واضطروا لاعلان وفاتها .',
    image:'https://pms.panet.co.il/online/images//articles/2021/01/07-01-2021/karam/020/7b51bcd8-d6ee-462a-b789-ffc2c9c6c2ab.jpg',
    backgroundcolor:'black'}
    ]
    
    articles.forEach(element => {
    
    
    
    
      let ArTitle = document.createElement("h2");
      ArTitle.innerText = element.title;
      let ArSubTitle = document.createElement("p");
      ArSubTitle.innerText = element.subTitle;
      let ArPhoto = document.createElement("img");
      ArPhoto.src = element.image;
      let Ardiv = document.createElement("div");
      let ArDivText = document.createElement("div");
    
    //////////////////////////////////////////////
    ArPhoto.style.maxHeight="240px"
    ArPhoto.style.width = "40%";
  
        
  
    
       
      
        // ArDivText.style.color="black";
      
    ArDivText.style.backgroundColor = element.backgroundcolor;
    ArTitle.style.color = "white";
    ArTitle.style.textAlign="right";
    ArSubTitle.style.color = "white";
    Ardiv.style.backgroundColor = element.backgroundcolor;
     
    Ardiv.style.display = "flex";

    Ardiv.style.margin="auto";
    // Ardiv.style.width="40%";
   
    Ardiv.style.width="50%";


    ArDivText.style.width = "40%";
    ArDivText.style.height="20%";
  
    ArDivText.style.textAlign = "right";
    
    
    Ardiv.style.paddingRight="0px";
    
    //////////////////////////////////////////////
    
    
    
    
    
    
      ArDivText.appendChild(ArTitle);
      ArDivText.appendChild(ArSubTitle);
    //   Ardiv.appendChild(ArPhoto);
    //     ArDivText.appendChild(ArTitle);
        Ardiv.appendChild(ArPhoto);
        Ardiv.appendChild(ArDivText);

        // document.getElementsByName("div").appendChild(Ardiv);  
     document.getElementsByTagName("body")[0].appendChild(Ardiv);
    
     // document.getElementsByName("div").appendChild(Ardiv);  
    }
    )