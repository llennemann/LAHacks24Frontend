import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getPlacesAction } from '../actions/homeactions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function TopBar() {
    const {loading,places}=useSelector(state=>state.getPlaces)
    var date=new Date()
    const [loc, setLoc] = useState("");
    const [startDate, setStartDate] = useState(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
    const [endDate, setEndDate] = useState("");
    const [home, setHome] = useState("");
    const [budget, setBudget] = useState("");
    const dispatch=useDispatch()

    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        let data={
            loc,startDate,endDate,home,budget
        }
        localStorage.setItem('formfields',JSON.stringify(data))
        dispatch(getPlacesAction(data))
    }

    const handleProfileClick = () => {
        navigate('/profile'); 
    };

    return (
        <nav>
            <form id='topbar'>
                <label>Departure 
                    <input
                        type="text"
                        value={home}
                        onChange={(e) => setHome(e.target.value)} />
                </label>
                <label>Destination 
                    <input
                        type="text"
                        value={loc}
                        onChange={(e) => setLoc(e.target.value)} />
                </label>
                <label>Start Date
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label>Return Date
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <label>Budget
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)} />
                </label>
                <input type="submit" onClick={handleSubmit} />
                <button type="button" onClick={handleProfileClick} className="profile-button">
                    <i className="fas fa-user"></i>
                </button>
            </form>
        </nav>
    );
}

export default TopBar;
