import TakeMeMainButton from "../components/TakeMeMainButton";

function HomePage() {
    return (
        <div  className="d-flex align-items-center justify-content-center text-center min-vh-100">
            <h1>Watch Rick and Morty for {<TakeMeMainButton/>}</h1>
        </div>
    )
}

export default HomePage