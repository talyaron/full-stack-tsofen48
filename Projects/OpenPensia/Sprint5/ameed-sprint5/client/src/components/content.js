import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";


function content(props) {

    // const [voteChoise, setVote] = useState(true)
    // function vote(e){
    // let add = e.target.name.value;

    // fetch('/add-vote', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }, body: JSON.stringify({ add })
    //   }).then(r => r.json())
    //     .then(data => {
    //       console.log(data)
    //       return data;
  
    //     })
    
    // }
    return (
        <div>
            {/* new div */}

            {/* content view */}
<br></br>
            <div className="grid-container">
                <div style={{ fontSize: "40px" }}>

                    <br></br>
                    <h1>{props.disApprovePer}</h1>
                    <br></br><br></br>
                    <p>נגד</p>

                </div>

                <div style={{ fontSize: "90px" }}>
                    <br></br><br></br><br></br>
                    <span className="lineb"></span>
                </div>

                <div style={{ fontSize: "40px" }}>

                    <br></br>

                    <h1>{props.ApprovePer}</h1>
                    <br></br><br></br>

                    <p>בעד</p>
                </div>


            </div>

            {/* end content */}


            {/* question */}

            <br></br>
            <div className="pp">
            <h3 style={{ color: "#324483" }}>

            מה הבחירה שלך?      
            
            </h3>
            </div>
            {/* end question */}



            {/* icons view */}

            <div className="grid-container  ">
                <div name="name">


                    <AiFillDislike  className="divlike" style={{ color: "#324483",cursor: "pointer" }} />
                    <h2>אני נגד</h2>

                </div>
                <div ></div>
                <div  >

                    <AiFillLike  className="divlike"  style={{ color: "#324483",cursor: "pointer" }} />
                    <h2>אני בעד</h2>

                </div>

            </div>
            {/* end icons view */}


            {/* end new div */}
        </div>
    );
}

export default content
