import { render } from "@testing-library/react"
import UImage from "../../../assets/images/p_img.png"
import Avatar from "../../../assets/images/user1.png"

function renderAttr() {
    return <span className="attr"></span>
}
function Profile() {
    const attributes = ['age', 'gender', 'hobby']
    return (
        <div className="profile-content">
            <img className="u-img" src={UImage} alt="" />
            <img className="avatar" src={Avatar} alt="" />
            <div className="content">
                {attributes.map(renderAttr)}
            </div>
            <div className="edit-button">Edit Profile</div>
        </div>
    )
}

export default Profile