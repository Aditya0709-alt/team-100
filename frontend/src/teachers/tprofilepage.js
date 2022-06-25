import React, { useState, useEffect } from "react";
import tdata from "./tdata";
import Card from "./tprofilecard";

function Profile(){
    const curr=tdata.filter(teacher => {
        return teacher.id=='1';
    })
    return (
        <div className="profilepage">
            <Card id={curr[0].id} name={curr[0].name} imgurl={curr[0].img}></Card>
        </div>
    )
}

export default Profile;