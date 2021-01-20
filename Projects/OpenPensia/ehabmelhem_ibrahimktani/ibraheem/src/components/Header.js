import "./Header.css"
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function Header() {
    return (
        <div className="container1">
            <div className = "page_above">
                <ChevronRightIcon id="ChevronRightIcon"/>
                <h1>בנק הפועלים</h1>
            </div>
            <h1>18.3%</h1>
            <h0>שיעור ההחזקה שלך</h0>
            <h1 id="bank_select">תבחר/י מי יהיו הדרקטורים בבנק הפועלים</h1>

        </div>


    );
}
export default Header;