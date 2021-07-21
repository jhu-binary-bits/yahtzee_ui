
import './profile.css';

/*
Creates a functional component for each member of the team. This is fed to the AboutUs component
 */
const Profile = (props) => {

    return(

        <div className="Profile">
            <table>
                <tr>
                    <th colSpan="2">
                        {props.name}
                    </th>
                </tr>
                <tr>
                    <td>
                        <img src={props.image} alt={props.name} className="ProfileImage"></img>
                    </td>
                    <td>
                        <p id="bio">{props.bio}</p>
                    </td>
                </tr>
            </table>
        </div>

    )
}

export default Profile;