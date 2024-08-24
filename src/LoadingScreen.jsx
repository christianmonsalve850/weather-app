import React, {useEffect, useState} from "react";

function LoadingScreen() {

    const [showLoading, setShowLoading] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showLoading ? 
                <div className="loading_container">
                    <p>Loading...</p>
                </div>
            : 
            <div className="no_wifi_connection">
                <p><span>Note: </span>Please connect to a stable wifi connection</p>
            </div>}
        </>
    );
}

export default LoadingScreen;