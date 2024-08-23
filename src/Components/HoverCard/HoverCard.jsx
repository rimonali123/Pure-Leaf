import '@smastrom/react-rating/style.css';
import useAxiosPublic from '../../Hoocks/UseAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CardHover from './CardHover';
import { useState } from 'react';

const HoverCard = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const { data: allData, refetch } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cardData');
            return res.data;
        }
    });

    // Calculate the current data to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = allData?.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil((allData?.length || 0) / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
                {currentData?.map(data => <CardHover key={data._id} data={data} refetch={refetch()}/>)}
            </div>
            
            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default HoverCard;
