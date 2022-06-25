import React, { useState, useEffect } from "react";
import tdata from "./tadata";
import Card from "./taprofilecard";

function Profile(){
    const curr=tdata.filter(teacher => {
        return teacher.id=='1';
    })
    return (
        <div className="profilepage">
            <Card id={curr[0].id} name={curr[0].name} imgurl={curr[0].img} sname={curr[0].schoolname} subject={curr[0].Subject}></Card>
        </div>
    )
}

export default Profile;