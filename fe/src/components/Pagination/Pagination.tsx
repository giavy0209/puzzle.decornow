import { FC, useMemo } from "react";

interface Pagination {
    total : number,
    pageSize : number,
    current : number,
    onChange(page) : any
}
const Pagination : FC<Pagination>  = ({total,pageSize,current,onChange}) => {
    const {totalPage,pagination} = useMemo(() => {
        const totalPage = Math.ceil(total/pageSize)
        const pagination : number[] = []
        for (let index = 0; index < totalPage; index++) {pagination.push(index+1)}
        const threeFirst : number[] = []
        const threeLast : number[] = []
        
        return {totalPage,pagination}
    },[current,pageSize,total])
    
    return (
        <>
        <div className="pagination">
            {
                totalPage <= 5 ?
                pagination.map(o => <div onClick={()=>onChange(o)} className={`page ${o === current ? 'active' : ''}`} key={o}><span>{o}</span></div> )
                :
                <>

                </>
            }
        </div>
        </>
    )
}

export default Pagination