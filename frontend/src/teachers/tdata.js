import React from "react";
const tdata=[
    {
        id: '1',
        name: 'Shyamal Jain',
        img: 'https://freepngimg.com/thumb/bill_gates/23973-7-bill-gates-file-thumb.png',
        schoolname: 'Salwan Public School',
        Subject: 'Mathematics'
    }
];
export default tdata;

// import axios from "axios";
// import { useState } from "react";

// const id = 2
// const baseURL = `http://localhost:5000/tasks/${id}`;

// function Tdata() {
//     const [post, setPost] = useState(null);

//     axios
//     .get(baseURL, {
//       timeout: 5000
//     })
//     .then(res => setPost(res.data))
//     .catch(err => console.error(err));
  
//     if (!post) return null;
  
//     return post
// }

// export default Tdata