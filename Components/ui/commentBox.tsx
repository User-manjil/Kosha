



export default function CommentBox({comments}:{comments:any}){
    return(
        <>
        <div className="flex flex-col mt-4 w-full border-b border-black/50 ">
            <div className="flex items-center  gap-5">
            <h3 className="text-2xl font-bold">{comments.name}</h3>
            <h3 className="text-xs font-medium">2 min Ago</h3>
            </div>
            
            <h3>{comments.comment}</h3>
            <p>Rating: {comments.rating}</p>
        </div>
        </>
    )
}
