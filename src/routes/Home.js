import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to="/registry">Click here for Registry</Link>
        </div>
    )
}

export default Home;
