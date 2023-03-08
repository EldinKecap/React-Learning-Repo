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


function HomePage(props) {

    return <MeetupList meetups={props.meetups}></MeetupList>
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;


//     return{
//         props:{
//             meetups:Dummy
//         }
//     }
// }

export async function getStaticProps() {
    console.log('yo');
    return {
        props: {
            meetups: Dummy
        },
        revalidate: 1
        
    };
}

export default HomePage;