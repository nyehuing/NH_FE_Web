import '../styles/Map.css'; // CSS 파일 경로
import PropTypes from "prop-types";

export default function Map({ data }) {
    const number =  data || [
        {id:1, status:false, jang:false, king:false, Eg:false, small:false},
        {id:2, status:false, jang:false, king:false, Eg:false, small:false},
        {id:3, status:false, jang:false, king:false, Eg:false, small:false},
        {id:4, status:false, jang:false, king:false, Eg:false, small:false},
        {id:5, status:false, jang:false, king:false, Eg:false, small:false},
        {id:6, status:false, jang:false, king:false, Eg:false, small:false},
        {id:7, status:false, jang:false, king:false, Eg:false, small:false},
        {id:8, status:false, jang:false, king:false, Eg:false, small:false},
        {id:9, status:false, jang:false, king:false, Eg:false, small:false},
        {id:10, status:false, jang:false, king:false, Eg:false, small:false},
        {id:11, status:false, jang:false, king:false, Eg:false, small:false},
        {id:12, status:false, jang:false, king:false, Eg:false, small:false},
        {id:13, status:false, jang:false, king:false, Eg:false, small:false},
        {id:14, status:false, jang:false, king:false, Eg:false, small:false},
        {id:15, status:false, jang:false, king:false, Eg:false, small:false},
        {id:16, status:false, jang:false, king:false, Eg:false, small:false},
        {id:17, status:false, jang:false, king:false, Eg:false, small:false},
        {id:18, status:false, jang:false, king:false, Eg:false, small:false},
        {id:19, status:false, jang:false, king:false, Eg:false, small:false},
        {id:20, status:false, jang:false, king:false, Eg:false, small:false},
        {id:21, status:false, jang:false, king:false, Eg:false, small:false},
        {id:22, status:false, jang:false, king:false, Eg:false, small:false},
        {id:23, status:false, jang:false, king:false, Eg:false, small:false},
        {id:24, status:false, jang:false, king:false, Eg:false, small:false},
        {id:25, status:false, jang:false, king:false, Eg:false, small:false},
        {id:26, status:false, jang:false, king:false, Eg:false, small:false},
        {id:27, status:false, jang:false, king:false, Eg:false, small:false},
        {id:28, status:false, jang:false, king:false, Eg:false, small:false},
        {id:29, status:false, jang:false, king:false, Eg:false, small:false},
        {id:30, status:false, jang:false, king:false, Eg:false, small:false},
        {id:31, status:false, jang:false, king:false, Eg:false, small:false},
        {id:32, status:false, jang:false, king:false, Eg:false, small:false},
        {id:33, status:false, jang:false, king:false, Eg:false, small:false},
        {id:34, status:false, jang:false, king:false, Eg:false, small:false},
        {id:35, status:false, jang:false, king:false, Eg:false, small:false},
        {id:36, status:false, jang:false, king:false, Eg:false, small:false},
        {id:37, status:false, jang:false, king:false, Eg:false, small:false},
        {id:38, status:false, jang:false, king:false, Eg:false, small:false},
        {id:39, status:false, jang:false, king:false, Eg:false, small:false},
        {id:40, status:false, jang:false, king:false, Eg:false, small:false},
        {id:41, status:false, jang:false, king:false, Eg:false, small:false},
        {id:42, status:false, jang:false, king:false, Eg:false, small:false},
        {id:43, status:false, jang:false, king:false, Eg:false, small:false},
        {id:44, status:false, jang:false, king:false, Eg:false, small:false},
        {id:45, status:false, jang:false, king:false, Eg:false, small:false},
        {id:46, status:false, jang:false, king:false, Eg:false, small:false},
        {id:47, status:false, jang:false, king:false, Eg:false, small:false},
        {id:48, status:false, jang:false, king:false, Eg:false, small:false},
    ]
    return (
        <div className="container">
            <div className="schoolMain">
                <span className="SText">학교 본관</span>
            </div>

            <div className="oneBlock">
                {number.slice(1, 12).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 1}</span>
                    </div>
                ))}
            </div>

            <div className="twoBlock">
                {number.slice(12, 22).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 12}</span>
                    </div>
                ))}
            </div>

            <div className="threeBlock">
                {number.slice(22, 32).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 22}</span>
                    </div>
                ))}
            </div>

            <div className="forBlock">
                {number.slice(32, 41).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 32}</span>
                    </div>
                ))}
            </div>

            <div className="fiveBlock">
                {number.slice(41, 49).map((item, index) => (
                    <div key={index} className="sero" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 41}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

Map.propTypes = {
    data: PropTypes.array,
};