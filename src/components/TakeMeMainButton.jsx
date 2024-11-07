import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function TakeMeMainButton() {

    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    console.log(7 % 8)
    return (
        <div>
            <Button className="free-button" size="lg" variant={colors[colorIndex]}  href="/about" >FREE</Button>
        </div>
    )
}

export default TakeMeMainButton;