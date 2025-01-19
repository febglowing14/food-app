import BreakFast from '../images/Breakfast.jpg';
import Lunch from '../images/Lunch.jpg';
import Dinner from '../images/Dinner.jpg';
import shake from '../images/shake.jpg';
import ice from '../images/ice.jpg';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


export default function Header() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login')
    }
    return (
        <div >
            <div className='logins'>
                <h1>Food delivery app!</h1>
                <input className='search' placeholder='search'></input>
                <div className='menu'>
                    <h4>Singnup</h4>
                    <h4>signin</h4>
                    <h4>cart</h4>
                    <button className='login' onClick={handleLogin}> Login</button>
                </div>
            </div>
            <div className='header'>
                <img className='one' src={BreakFast} alt="Breakfast" />

                <img className='two' src={Lunch} alt='Lunch' />

                <img className='three' src={Dinner} alt='Dinner' />
                <img className='four' src={shake} alt='shake' />
                <img className='five' src={ice} alt='ice' />



            </div>
            <div className='list'>
                <h4>BreakFast</h4>
                <h4>Lunch</h4>
                <h4>Dinner</h4>
                <h4>shake</h4>
                <h4>ice</h4>
            </div>
        </div>
    )
}