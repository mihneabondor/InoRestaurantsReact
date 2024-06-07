import './Home.css'
import '../Welcome/Welcome.css'
import Map from './ReactMap'
import Searchbar from './SearchBar'

function Home() {
    return (
        <div className="Background-gradient">
            <div className="Home-Container">
                <br />
                <br />
                <Map />
                <br />
                <Searchbar />
            </div>
        </div>
    );
}

export default Home;