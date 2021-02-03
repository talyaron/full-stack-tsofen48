import React from "react";
import "./AutoComplete.css";

import Select from "react-select";
// import { colourOptions } from "../data";

export default function AutoComplete({ selectedMembers, setSelectedMembers }) {
  return (
    <div>
      <Select
        //  defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        //  options={colourOptions}
        // { value: 'ocean', label: 'Ocean'ocean', labe '#00B8D9', isFixed: true },

        options={[
          { value: "אחמד טיבי", label: "אחמד טיבי" },
          { value: "בנימין נתניהו", label: "בנימין נתניהו" },
          { value: "אבוטבול משה", label: "אבוטבול משה" },

          { value: "אזולאי ינון", label: "אזולאי ינון" },
          { value: "אייכלר ישראל", label: "אייכלר ישראל" },
          { value: "אחמד טיבי", label: "אחמד טיבי" },
          { value: "בנימין נתניהו", label: "בנימין נתניהו" },
          { value: "אבוטבול משה", label: "אבוטבול משה" },

          { value: "אזולאי ינון", label: "אזולאי ינון" },
          { value: "אייכלר ישראל", label: "אייכלר ישראל" },
          { value: "אחמד טיבי", label: "אחמד טיבי" },
          { value: "בנימין נתניהו", label: "בנימין נתניהו" },
          { value: "אבוטבול משה", label: "אבוטבול משה" },
          { value: "אדלשטיין יולי יואל", label : "אדלשטיין יולי יוא" },

          { value: "אזולאי ינון", label: "אזולאי ינון" },
          { value: "אייכלר ישראל", label: "אייכלר ישראל" },
        ]}
        className="basic-multi-select"
        classNamePrefix="select"
        isRtl={true}
        isClearable={false}
        isSearchable={true}
        onChange={(markedMembers) => {
          setSelectedMembers(markedMembers);
          console.log(markedMembers);
        }}
        placeholder={"בחר אחד או יותר מחברי הכנסת.."}
      />
    </div>
  );
}
