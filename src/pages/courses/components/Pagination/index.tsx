import { number } from "yup";

interface IPaginate {
	postsPerPage:number;
	totalPosts:number;
	currentPage:number;
	paginate:(pageNumber: number) => void;
	previousPage:() => void;
	nextPage:() => void;
}

const Paginate = ({
	postsPerPage,
	totalPosts,
	currentPage,
	paginate,
	previousPage,
	nextPage,
}:IPaginate) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className="py-2 mx-1">
			<ul className="rounded-sm group flex-wrap p-3 pt-5 flex items-center justify-center max-w-1/3 mx-auto">
				<li onClick={previousPage} className="mr-1 px-2 py-1 text-lg cursor-pointer  hover:bg-[#0f7898] transition hover:duration-100 hover:delay-100 text-white bg-[#004458]">
					{"<"}
				</li>
				{pageNumbers.map((number) => (
					<li
						key={number}
						onClick={() => paginate(number)}
						className={
							(number === currentPage ? 'px-4 py-3 text-sm text-white rounded-sm hover:bg-[#004458] bg-[#004458]' 
							: 'text-lg font-semibold bg-inherit px-2 py-1 rounded-sm cursor-pointer ease-out duration-100')
						}
					>
						{number}
					</li>
				))}
				<li onClick={nextPage} className="rounded-sm ml-1 px-2 py-1 text-lg cursor-pointer hover:bg-[#0f7898] hover:text-white transition hover:duration-100 hover:delay-100 text-white bg-[#004458]">
                {">"}
				</li>
			</ul>
		</div>
	);
};

export default Paginate;