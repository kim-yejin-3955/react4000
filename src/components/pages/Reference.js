import axios from "axios";
import React from "react";
import Loading from "../basics/Loading";
import Header from "../Header";
import Layout from "../Layout";
// import Footer from "../Footer";
import WrapTitle from "../basics/WrapTitle";

// function ReferText({alpha,attr,desc}) {
//   return (
//     <li>
//       <a href="/">
//         <span className="alpha">{alpha}</span>
//         <span className="attr">{attr}</span>
//         <span className="desc">{desc}</span>
//       </a>
//     </li>
//   );
// }

// const referAttr = [
//     {
//         alpha:"A",
//         attr: "all",
//         desc: "all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.",
//     },
//     {
//         alpha:"A",
//         attr: "align-content",
//         desc: "align-content 콘텐츠의 상하관계 정렬 상태를 정의합니다.",
//     },
//     {
//         alpha:"A",
//         attr: "align-items",
//         desc: "align-items 콘텐츠 내부의 정렬 상태를 정의합니다.",
//     }
// ]

// function Reference() {
//   return (
//   <div id="wrap" className="light">
//     <Header info="none" />
//     <Layout>
//       <section id="referCont">
//         <div className="container">
//           <WrapTitle text={["HTML", "reference"]} />
//           <div className="refer-cont">
//             <div className="refer-table">
//             <h2>CSS REFERENCE </h2>
//               <ul>
//                 {referAttr.map((el) => (
//                     <ReferText
//                     key={el.attr}
//                     alpha={el.alpha}
//                     attr={el.attr}
//                     desc={el.desc}
//                     />
//                 )) }
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   </div>
// );
// }

class Reference extends React.Component {
  state = {
    isLoading: true,
    refers: [],
  };

  

  getRefer = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      // "https://kim-yejin-3955.github.io/react4000/src/json/reference.json"
      "https://webstoryboy.github.io/react3001/src/json/reference.json"
    );
    //console.log(htmlRefer);
    this.setState({ htmlRefer, isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      // this.setState({isLoading:false})
      this.getRefer();
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div id="wrap" className="light">
            <Header info="none" />
            <Layout>
              <section id="referCont">
                <div className="container">
                  <WrapTitle text={["HTML", "reference"]} />
                  <div className="refer-cont">
                    <div className="refer-table">
                      <h2>CSS REFERENCE </h2>
                      <ul></ul>
                    </div>
                  </div>
                </div>
              </section>
            </Layout>
          </div>
        )}
      </div>
    );
  }
}

export default Reference;
