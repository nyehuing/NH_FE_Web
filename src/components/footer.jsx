import '../styles/Footer.css'; // CSS 파일 경로
import PropTypes from "prop-types";

export default function Footer({ on, off, front, back }) {
    return (
        <div className="FooterBox">
            <div className={front ? 'selectButton' : 'button'} onClick={on}>
                <span className={front ? 'selectText' : 'footertext'}>정문</span>
            </div>

            <div className={back ? 'selectButton' : 'button'} onClick={off}>
                <span className={back ? 'selectText' : 'footertext'}>후문</span>
            </div>
        </div>
    );
}

Footer.propTypes = {
    on: PropTypes.func.isRequired,
    off: PropTypes.func.isRequired,
    front: PropTypes.bool.isRequired,
    back: PropTypes.bool.isRequired,
};