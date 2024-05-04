import React from 'react';

function StudentStatistics() {
    const totalStudents = 100;
    const totalRegularStudents = 70;
    const totalIrregularStudents = 30;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Student Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-200 p-4 rounded-md hover:bg-green-300 transition-colors duration-300 h-[200px] ">
                        <h3 className="text-lg font-semibold mb-2"><i class="fa-solid fa-user mr-2"></i>Total Students</h3>
                        <p className="text-5xl ">{totalStudents}</p>
                        <p className='float-right text-3xl mt-14 text-green-900'><i class="fa-solid fa-circle-right"></i></p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md hover:bg-green-300 transition-colors duration-300 h-[200px]">
                    <h3 className="text-lg font-semibold mb-2"><i class="fa-solid fa-user mr-2"></i>Regular Students</h3>
                    <p className="text-5xl">{totalRegularStudents}</p>
                    <p className='float-right text-3xl mt-14 text-green-900'><i class="fa-solid fa-circle-right"></i></p>
                </div>
                <div className="bg-gray-200 p-4 rounded-md hover:bg-green-300 transition-colors duration-300 h-[200px]">
                    <h3 className="text-lg font-semibold mb-2"><i class="fa-solid fa-user mr-2"></i>Irregular Students</h3>
                    <p className="text-5xl">{totalIrregularStudents}</p>
                    <p className='float-right text-3xl mt-14 text-green-900'><i class="fa-solid fa-circle-right"></i></p>
                </div>
            </div>
        </div>
    );
}

export default StudentStatistics;
