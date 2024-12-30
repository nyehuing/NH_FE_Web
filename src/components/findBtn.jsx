import '../styles/FindBtn.css';
import Search from '../assets/search.svg';
import PropTypes from 'prop-types';


export default function FindBtn({ name, onClick }) {
    return (
        <div className="FindBtnBox" onClick={onClick}>
            <span className="BtnText">{name}</span>
            <img src={Search} alt={"Search"} width={30} />
        </div>
    );
}


FindBtn.propTypes = {
    name: PropTypes.string, // Add this line
    onClick: PropTypes.func,
}