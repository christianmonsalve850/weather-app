import styles from "./TopPart.module.css"

function Profile() {
    return (<>
        <img className={styles.profile} src={new URL('/assets/profile.png', import.meta.url)} alt="profile" />
    </>);
}

export default Profile;