import { FC, useMemo } from "react";
import {Pagination as AntPagination} from 'antd'
interface Pagination {
    total: number,
    pageSize: number,
    current: number,
    onChange(page): any
}
const Pagination: FC<Pagination> = ({ total, pageSize, current, onChange }) => {
    return (
        <>
            <div className="pagination">
                <AntPagination
                    onChange={(page) => onChange(page)}
                    current={current}
                    pageSize={pageSize}
                    total={total} />
            </div>
        </>
    )
}

export default Pagination