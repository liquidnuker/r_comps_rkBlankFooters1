// BlankFooter1 segments
// ======================================================/
function BF_segment1(props) {
  return (
    <div>segment1</div>
  );
}

function BF_segment2(props) {
  return (
    <div>segment2</div>
  );
}

function BF_segment3(props) {
  return (
    <div>segment3</div>
  );
}

function BF_segment4(props) {
  return (
    <div>segment4</div>
  );
}

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