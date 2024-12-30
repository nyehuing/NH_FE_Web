import '../styles/Map.css'; // CSS 파일 경로
import PropTypes from "prop-types";

export default function Map({ data }) {
    const number = data || [
        {id:48, status:false, jang:false, king:false, Eg:false, small:false},
        {id:49, status:false, jang:false, king:false, Eg:false, small:false},
        {id:50, status:false, jang:false, king:false, Eg:false, small:false},
        {id:51, status:false, jang:false, king:false, Eg:false, small:false},
        {id:52, status:false, jang:false, king:false, Eg:false, small:false},
        {id:53, status:false, jang:false, king:false, Eg:false, small:false},
        {id:54, status:false, jang:false, king:false, Eg:false, small:false},
        {id:55, status:false, jang:false, king:false, Eg:false, small:false},
        {id:56, status:false, jang:false, king:false, Eg:false, small:false},
        {id:57, status:false, jang:false, king:false, Eg:false, small:false},
        {id:58, status:false, jang:false, king:false, Eg:false, small:false},
        {id:59, status:false, jang:false, king:false, Eg:false, small:false},
        {id:60, status:false, jang:false, king:false, Eg:false, small:false},

    ]
    return (
        <div className="Map2container">
            <div className="auditorium">
                <span className="text">강당</span>
            </div>
            <div className="Block">
                {number.slice(48, 60).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="text">{index + 1}</span>
                    </div>
                ))}
            </div>
            <div className="src">
                <span className="text">SRC관</span>
            </div>
        </div>
    );
}

Map.propTypes = {
    data: PropTypes.array,
};