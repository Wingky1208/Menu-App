import HTMLFlipBook from "react-pageflip";
import Menu from '../Menu/index';

function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">Page 1<Menu /></div>
      {/* <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div> */}
    </HTMLFlipBook>
  );
}

export default MyBook;





// {categories.map((item) => (
//     <div className="demoPage">Page 1
//         <Menu key={item._id} />   
//     </div>
// ))}