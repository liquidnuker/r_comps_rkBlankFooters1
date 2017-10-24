import BlankFooter1 from "./BlankFooter1_wrap.jsx";
import BlankFooter2 from "./BlankFooter2_wrap.jsx";

export default function Home(props) {
  return (
    <div>
  {/*begin BlankFooter1*/}
      <h2 className="item-id">BlankFooter1</h2>
      <BlankFooter1 />   

  {/*begin BlankFooter2*/}
      <h2 className="item-id">BlankFooter2</h2>
      <BlankFooter2 />      
    </div>
  );
}