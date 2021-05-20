export const getStaticPaths=async (context)=>{
    let abc=await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    let unr=await abc.json()
    let events=unr.events
    console.log(typeof(events));
    const paths=events.map(a=>{
        return {
            params:{id:a.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps=async (context)=>{
    let myid=context.params.id
    return {
        props:{id:myid}
    }
}
const Details=({id})=>{
    {console.log(id);}
    return <h1>page no is here {id}</h1>
}

export default Details