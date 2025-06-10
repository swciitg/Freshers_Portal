const InterCult = () => {
const { data, loading, error } = useFetchData(
    process.env.REACT_APP_BACKEND_BASE_URL + "/inter-cult",
    "GET"
)

    return ( <div></div> );
}
 
export default InterCult;