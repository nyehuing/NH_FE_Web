import '../styles/Map2.css'; // CSS 파일 경로
import PropTypes from "prop-types";

export default function Map2({ data }) {
    const number = data;
    return (
        <div className="Map2container">
            <div className="auditorium">
                <span className="Map2text">강당</span>
            </div>
            <div className="Block">
                {number.slice(48, 60).map((item, index) => (
                    <div key={index} className="garo" style={{ backgroundColor: item ? "#FF2C2C" : "#53F657" }}>
                        <span className="Map2text">{index + 1}</span>
                    </div>
                ))}
            </div>
            <div className="src">
                <span className="Map2text">SRC관</span>
            </div>
        </div>
    );
}

Map2.propTypes = {
    data: PropTypes.array,
};