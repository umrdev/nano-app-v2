import Thumbnail from './Thumbnail'
function Results({datas}){
   console.log(datas)
   return(
       <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {datas.map((result) => (
             <Thumbnail key={result.id} result={result} />
          ))}
       </div>
   )
}

export default Results


