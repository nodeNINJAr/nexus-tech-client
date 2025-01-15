import React from 'react';
import WorkSheetTable from '../../../components/table/WorkSheetTable';
import WorkSheetFrom from '../../../components/form/WorkSheetFrom';

const WorkSheet = () => {
    return (
        <div className='overflow-x-scroll'>
            <h1 className='text-lg font-poppins font-semibold pb-3 underline'>Submit Your Daily Work</h1>
             {/*  */}
             <WorkSheetFrom/>
            {/* from table */}
            <WorkSheetTable/>
        </div>
    );
};

export default WorkSheet;