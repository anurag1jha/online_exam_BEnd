
// const express = require('express');

// const router = express.Router();

// const db = require('../db');

// router.get('/allusers',async(req,res)=>{
//     try{
//         const response = await db.promise().query("SELECT * FROM users")
//         // console.log(response);
//         res.status(200).json(response[0])
//     }
//     catch(err){
//         res.status(400).json(err);
//         console.log(err);
//     }
// })

// router.post('/getuser',async(req,res)=>{
//     // const users =req.body.users;
//     try{
//         const response = await db.promise().query("SELECT * FROM users WHERE username = 'anurag1'")
//         // console.log(response);
//         res.status(200).json(response[0])
//     }
//     catch(err){
//         res.status(400).json(err);
//         console.log(err);
//     }
// })

// router.get('/searchuser/:userid',async(req,res)=>{
//     // const usersid =req.querry.id;
//     try{
//         const userid =req.params.userid;
//         const response = await db.promise().query(`SELECT * FROM users WHERE userid = '${userid}'`);
//         console.log(userid);
//         res.status(200).json(response[0])
//     }
//     catch(err){
//         res.status(400).json(err);
//         console.log(err);
//     }
// })

// router.post('/adduser',async(req,res)=>{
//     try {
//         const response = await db
//           .promise()
//           .query(`
          
//           INSERT INTO users (
//             userid ,
//               username ,
//               name_of_user  ,
//               email ,
//             user_password ,
//               user_status ,
//               mobile_number ,
//               user_type 
//           )
//           VALUES (
//           '${req.body.userid}',
//           '${req.body.username}',
//           ' ${req.body.name_of_user}',
//           'req.body.email',
//           '${req.body.password}',
//           false,
//           '${req.body.mobile_number}',
//           '${req.body.user_type}'
//           )
          
          
//           `);
//         console.log(response[0])
//         res.status(200).json(response[0]);
//       } catch (error) {
//         console.log(error);
//         res.status(400).json({ massage: error.massage });
//       }
//     });
//     router.put('/updateuser',async(req,res)=>{
//         try {
//             const response = await db
//               .promise()
//               .query(`
              
//               UPDATE users SET 
//               username = '${req.body.username}' ,
//               name_of_user = '${req.body.name_of_user}',
//               email = '${req.body.email}',
//               mobile_number ='${req.body.mobile_number}',
//               user_type = '${req.body.user_type}'
//               WHERE  
//               userid =  '${req.body.userid}'
              
             
//               `);
//             console.log(response[0])
//             res.status(200).json(response[0]);
//           } catch (error) {
//             console.log(error);
//             res.status(400).json({ massage: error.massage });
//           }
//     })

// module.exports = router;
