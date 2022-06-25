import React from 'react'
import View_row from './components/view_row'
import rowData from './rowData'

function View_data() {
    const curr=rowData.filter(teacher => {
        return teacher.id=='1';
    })
    console.log(curr)
    return (
        <div>
            {/* hello
            <View_row id={curr[0].id} name={curr[0].name} sname={curr[0].schoolname} subject={curr[0].Subject}>
            </View_row> */}
        </div>
    )
}

export default View_data