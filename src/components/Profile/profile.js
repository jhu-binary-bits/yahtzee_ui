
import './profile.css';

/*
Creates a functional component for each member of the team. This is fed to the AboutUs component
 */
const Profile = (props) => {

    return(

        <div className="Profile">

            <div>
                <h3>{props.name}</h3>
            </div>
            <img src={props.image} alt={props.name} className="ProfileImage"></img>
            <p id="bio">{props.bio}</p>

        </div>

    )
}

export default Profile;