// BlankFooter1 segments
// ======================================================/
import BF_segment1 from "./BF_segment1.jsx";
import BF_segment2 from "./BF_segment2.jsx";
import BF_segment3 from "./BF_segment3.jsx";
import BF_segment4 from "./BF_segment4.jsx";

// main BlankFooter1
// ======================================================/

// use export default for async wrap
export default function BlankFooter1(props) {
  return (
    <div className="row">
      <div className="col-sm-3">
        <BF_segment1 />
      </div>
      <div className="col-sm-3">
        <BF_segment2 />
      </div>
      <div className="col-sm-3">
        <BF_segment3 />
      </div>
      <div className="col-sm-3">
        <BF_segment4 />
      </div>
    </div>
  );
}