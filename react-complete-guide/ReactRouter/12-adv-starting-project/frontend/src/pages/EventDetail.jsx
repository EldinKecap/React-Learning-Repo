import { useParams } from "react-router-dom";

function EventDetailPage() {
    let params = useParams();
    console.log(params);
    return <>
        <h1>EventDetailPage</h1>
        <p>Event ID: {params.eventId}</p>
    </>

}

export default EventDetailPage;