import { useState } from "react";
import ApiCallButton from "../components/ApiCallButton";
import SeasonsTabs from "../components/SeasonsTabs";

function AboutPage() {
    const [data, setData] = useState([])
    const ApiUrlOne = 'https://rickandmortyapi.com/api/episode'
    const ApiUrlTwo = (page) => `https://rickandmortyapi.com/api/episode?page=${page}`
    const queryType = 'Episodes'

    // console.log(episodes)

    return (
        <div className="container">
            <h2>Seasons and Episodes</h2>
            {
                data.length == 0 ?
                <ApiCallButton setData={setData} ApiUrlOne={ApiUrlOne} ApiUrlTwo={ApiUrlTwo} queryType={queryType}/> :
                <SeasonsTabs data={data} setData={setData}/>
            }
        </div>
    )
}

export default AboutPage;