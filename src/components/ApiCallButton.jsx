import Button from "react-bootstrap/Button";
import axios from 'axios';

function ApiCallButton({ setData, ApiUrlOne, ApiUrlTwo, queryType }) {

    const getEpisodes = async () => {
        let allEpisodes = []
        try {
            const responseOne = await axios.get(ApiUrlOne);
            const totalPages = responseOne.data.info.pages

            for (let i = 1; i <= totalPages; i++) {
                const responseTwo = await axios.get(ApiUrlTwo(i));
                let episodesResponse = responseTwo.data.results
                let episodes = allEpisodes
                allEpisodes = [...episodes, ...episodesResponse]
            }
            setData(allEpisodes)
        } catch (error) {
            console.error("An error occurred:", error)
        }
    }
    return (
        <div>
            <Button onClick={() => getEpisodes()}>Get {queryType}</Button>
        </div>
    )
}
export default ApiCallButton;