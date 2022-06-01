import { useEffect, useState } from "react";
import '../btn/btn.css';

const Btn = () => {
    // The back-to-top button is hidden at the beginning
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    return (
        <>

            {showButton && (
                <button  className="back-to-top">
                    Invest Now
                </button>
            )}
            {/* &#8679; is used to create the upward arrow */}
        </>
    );
};

export default Btn;