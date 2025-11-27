import styles from "./TopPart.module.css"

function Profile() {
    return (<>
        <img className={styles.profile} src="./public/assets/profile.png" alt="profile" />
    </>);
}

export default Profile;