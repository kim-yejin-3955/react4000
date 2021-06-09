import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 외부에서 파일 가져올떄는 PropTypes을 설정해주는 것이 좋음

function ReferInfo({ alpha, attr, desc }) {
  return (
    <li>
      <Link to="/">
        <span className="alpha">{alpha}</span>
        <span className="attr">{attr}</span>
        <span className="desc">{desc}</span>
      </Link>
    </li>
  );
}

// ReferInfo.PropTypes = {
//   alpha: PropTypes.string.isRequired,
//   attr: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
// };
export default ReferInfo;
