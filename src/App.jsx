import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Footer from './components/footer.jsx';
import FindBtn from './components/findBtn.jsx';
import Map from './components/map.jsx';
import { IPContext } from './context.jsx';
import Map2 from './components/map2.jsx';
import Logo from './assets/logo.svg';
import './styles/MainPage.css';

export default function MainPage() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [carNum, setCarNum] = useState('');
    const [carNumConst, setCarNumConst] = useState();
    const [selectNum, setSelectNum] = useState(null);
    const [data, setData] = useState({ parking: [] });
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const { ip } = useContext(IPContext);
    const [isFront, setIsFront] = useState(true);

    const modalToggle = () => {
        if (carNum !== '') {
            setCarNum('');
            setSelectNum(null);
        }
        setIsModalVisible(!isModalVisible);
    };

    const search = async () => {
        try {
            const response = await axios.get(`https://${ip}/api/witch?carNumber=${carNum}`);
            setSelectNum(response.data.parkingWitch);
            setCarNumConst(carNum);
        } catch (error) {
            console.error(error);
        }
    };

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://${ip}/api/show`);
            if (response.status === 200) setData(response.data);
            else console.error(response.status);
        } catch (error) {
            console.error("Error fetching parking data:", error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        setTimeout(() => getData(), 2000);

    }, []);

    if (isLoading) {
        return (
            <div className="container-loading">
                <div className="mega-box">
                    <img src={Logo} alt="Logo" width={200} />
                    <p className="loading-text">자동차 주차 공간 확인할땐?</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {isModalVisible && (
                <div className="dark-overlay container" onClick={modalToggle}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ height: selectNum ? '280px' : '230px' }}>
                        <h2 className="modal-title">차량 검색하기</h2>
                        <input
                            value={carNum}
                            onChange={(e) => setCarNum(e.target.value)}
                            className="input"
                            placeholder="차량번호를 입력해주세요 ex : 123가4567"
                        />
                        {selectNum && (
                            <div className="result">
                                <p className="result-text">위치 : {selectNum}</p>
                                <p className="result-text">번호판 : {carNumConst}</p>
                            </div>
                        )}
                        <button onClick={search} className="search-btn">
                            검색하기
                        </button>
                    </div>
                </div>
            )}
            <div className="container">
                    {isFront ? <Map data={data.parking} /> : <Map2 data={data.parking} />}
                <FindBtn onClick={modalToggle} name={'차량 번호 검색하기'} />
                <Footer front={!isFront} back={isFront} on={() => setIsFront(true)} off={() => setIsFront(false)} />
            </div>
        </div>
    );
}