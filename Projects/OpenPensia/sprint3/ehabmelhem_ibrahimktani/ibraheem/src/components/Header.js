import "./Header.css"
import {useState,useEffect} from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Header() {
    const [company, setCompany] = useState('');
    const [perception, setPerception] = useState(0);
    useEffect(()=>{
        fetch('/voting/get-header-information').then(r =>r.json()).then(data =>{
            console.log(data);
            setCompany(data.company);
            setPerception(data.perception)
        })

    },[])
    


    return (
        <div className="container1">
            <div className = "page_above">
                <ChevronRightIcon id="ChevronRightIcon"/>
                <h1>{company}</h1>
            </div>
            <h1>{perception}%</h1>
            <h0>שיעור ההחזקה שלך</h0>
            <h1 id="bank_select"> תבחר/י מי יהיו הדרקטורים ב {company}</h1>

        </div>


    );
}
export default Header;