// import React, { useState, useEffect } from 'react'
// import { Pagination } from 'antd';

// const PaginationTab = ({ page, pages, setPage }) => {
// 	return (
// 		<nav aria-label="Page navigation example">
// 			<Pagination
// 				current={page}
// 				pageSize={20}
// 				total={pages}
// 				onChange={setPage}
// 				showSizeChanger={false}
// 				size="small"
// 			/>
// 			{/* <ul className="pagination">
// 				<li className="page-item">
// 					<button className='btn btn-primary btn-prev'
// 						disabled={page === 1}
// 						onClick={() => setPage(page - 1)}>Prev</button>
// 				</li>
// 				<li className="page-item">
// 					<button className="page-link" onClick={() => setPage(1)}>{1}</button>
// 				</li>
// 				<li className="page-item">
// 					<button className="page-link" onClick={() => setPage(2)}>{2}</button>
// 				</li>
// 				<li className="page-item">
// 					<button className="page-link" onClick={() => setPage(3)}>{3}</button>
// 				</li>
// 				<li className="page-item">
// 					<button className="page-link" >...</button>
// 				</li>
// 				<li className="page-item">
// 					<button className="page-link" onClick={() => setPage(pages)}>{pages}
// 					</button>
// 				</li>
// 				<button className='btn btn-primary btn-next' onClick={() => setPage(page + 1)}>Next</button>
// 			</ul> */}
// 		</nav>
// 	)
// }

// export default PaginationTab