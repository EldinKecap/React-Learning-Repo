import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

const Dummy = [
    {
        id: 'm1',
        title: 'Meetup',
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        address: 'Randome Address 5',
        description: 'Loresm alkjdfhakljdshflkajshdflkajshdfaklsdhjfalksdjhfasdjf'
    },
    {
        id: 'm2',
        title: 'Meetup',
        image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        address: 'Randome Address 5',
        description: 'Loresm alkjdfhakljdshflkajshdflkajshdfaklsdhjfalksdjhfasdjf'
    },
]


function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    useEffect(() => {
        setLoadedMeetups(Dummy);
    }, [])

    return <MeetupList meetups={loadedMeetups}></MeetupList>
}

export default HomePage;