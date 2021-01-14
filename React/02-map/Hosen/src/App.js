import "./App.css";
import Image from "./components/Image/Image";
function App() {
  let imagesToSHow = [
    "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
    "https://i1.wp.com/travelwithme247blog.com/wp-content/uploads/2017/08/PARTHENON-.jpg?resize=940%2C705&ssl=1",
    "https://http2.mlstatic.com/D_NQ_NP_925060-MLA25869495030_082017-O.webp",
    "https://p4.wallpaperbetter.com/wallpaper/596/777/240/fantasy-landscape-fantasy-art-painting-art-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/4c/c0/ca/4cc0caf00a1d335e456ff6513210080e.jpg",
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-guilin-landscape-oil-painting-landscape-color-hand-painted-background-paintingviewhand-paintedbackground-image_60223.jpg",
  
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-guilin-landscape-oil-painting-landscape-color-hand-painted-background-paintingviewhand-paintedbackground-image_60223.jpg",
  
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-guilin-landscape-oil-painting-landscape-color-hand-painted-background-paintingviewhand-paintedbackground-image_60223.jpg",
  
    "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-guilin-landscape-oil-painting-landscape-color-hand-painted-background-paintingviewhand-paintedbackground-image_60223.jpg",
  
  ];
  return (
    <div className="App">
      <div className="title">
        <h3>Ctalog</h3>
      </div>
      <div className="imagesContainer">
        {/* {imagesToSHow.map((imgUrl)=>
        
         
        )} */}
        {imagesToSHow.map((imageUrl) => {
        
          return (
        <Image src={imageUrl}></Image>

            // <Image  />
            //  <Icon
            //    key={icon.id}
            //    title={icon.title}
            //    img={icon.img} />
          );
        })}

      </div>
    </div>
  );
}

export default App;
