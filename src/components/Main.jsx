import bhavan from '../images/bhavan.jpg';
import star from '../images/star.jpg';

export default function Main() {
    return (
        <div>
            <h1>All RESTAURANT</h1>
            <div className="buttons">
                <div className="dropdown">
                    <select className="sort">
                        <option value="default">Sort</option>
                        <option value="rating">Rating</option>
                        <option value="delivery">Fast Delivery</option>
                        <option value="nearest">Nearest</option>
                        <option value="offers">Great Offers</option>
                    </select>
                </div>
                <button>Fast Delivery</button>
                <button>Nearest</button>
                <button>Great offers</button>
                <button>Rating 4.0+</button>
                <div className="dropdown">
                    <select className="cuisines">
                        <option value="default">North Indian</option>
                        <option value="south">south Indian</option>
                        <option value="chinese">chinese</option>
                        <option value="Italian">Italian</option>
                    </select>
                </div>


            </div>

            <div className="first">
                <img className="six" src={bhavan} alt="bhavan" />
                <div className="details">
                    <h2 className="hotelone">SARAVANA BHAVAN HOTEL</h2>
                    <div className="rateone">
                        <img className="seven" src={star} alt="star" />
                        <h2>4.5</h2>
                        <h2>(54k+ Rating)</h2>
                        <button className='firstmenu'>Menu</button>
                    </div>
                </div>
            </div>
           

        </div>

    )
}
