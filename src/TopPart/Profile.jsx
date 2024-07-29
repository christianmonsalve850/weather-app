import styles from "./TopPart.module.css"

function Profile() {
    return (<>
        <img className={styles.profile} src="./src/assets/profile.png" alt="profile" />
    </>);
}

export default Profile;