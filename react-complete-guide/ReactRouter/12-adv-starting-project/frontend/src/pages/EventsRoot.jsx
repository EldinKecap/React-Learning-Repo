const { Outlet } = require("react-router-dom");
const { default: EventsNavigation } = require("../components/EventsNavigation");

function EventsRootLayout() {
    return <>
    <EventsNavigation/>
    <Outlet/>

    </>
}

export default EventsRootLayout;