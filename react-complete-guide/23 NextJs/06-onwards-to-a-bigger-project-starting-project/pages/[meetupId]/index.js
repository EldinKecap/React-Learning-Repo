
import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetailsPage() {
    return <>
        <MeetupDetail
            image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            title='First meet'
            address='Some address 5'
            description='awesome people doing awesome stuff'
        />

    </>
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
                title: 'First meet',
                address: 'Some address 5',
                description: 'awesome people doing awesome stuff',
            }
        }
    }
}

export default MeetupDetailsPage;

