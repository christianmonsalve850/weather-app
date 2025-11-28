import styles from "./TopPart.module.css"

function Profile() {
    return (<>
        <img className={styles.profile} src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="profile" />
    </>);
}

export default Profile;