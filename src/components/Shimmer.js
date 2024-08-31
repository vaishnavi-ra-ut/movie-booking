const Shimmer = () => {
    return (
        <>
            <div className="w-[100vw] flex flex-wrap gap-5 m-8">
                {Array(10).fill("").map((e, index) => (
                    <div className=" gap-3 w-[200px] h-[200px] p-5 bg-gray-500 rounded-lg" key={index}>
                        {/* <div className=""></div>
                        <div className=""></div>
                        <div className=""></div> */}
                    </div>))}
            </div>
        </>
    )
}
export default Shimmer;