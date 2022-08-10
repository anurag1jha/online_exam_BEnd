const express = require('express');

const router = express.Router();

const db = require('../db');

//http://localhost:4000/questions/getquestions
router.get('/getquestions', async(req, res) => {
    try{
        const response = await db.promise().query('SELECT * FROM questions');
        //console.log(response[0]);
        res.status(200).json(response[0]);
    }
    catch(err){
        res.status(400).json(err);
    }
})

http://localhost:4000/users/searchuser/:id

router.get("/searchquestion/:qs_id", async (req, res) => {
    try {
        const userId = req.params.qs_id;
        const response = await db
            .promise()
            .query(`SELECT * FROM questions WHERE qs_id = '${qs_id}'`);
        res.status(200).json(response[0]);
    } catch (err) {
        res.status(400).json(err);
    }
});

// http://localhost:4000/questions/getquestionbysubject/?subject=1&count=2
router.get("/getquestionbysubject/", async (req, res) => {
    try {
        const subject_id = req.query.subject;
          const count = req.query.count;
        const response = await db
            .promise()
            .query(`SELECT * FROM questions WHERE subject_id = '${subject_id}' ORDER BY RAND() LIMIT ${count}`);
        res.status(200).json(response[0]);
    } catch (err) {
        res.status(400).json(err);
    }
});

// http://localhost:4000/users/removeuser/editquestion
router.delete("/removequestion/:qs_id", async (req, res) => {
    try {
        const qs_id = req.params.qs_id;
        const response = await db
            .promise()
            .query(`DELETE FROM users WHERE qs_id = '${qs_id}'`);
        res.status(200).json(response[0]);
    } catch (err) {
        res.status(400).json(err);
    }
});


// http://localhost:4000/questions/addquestion
router.post('/addquestion', async(req, res) => {
    try {
        // console.log(req.body);
        const response = await db.promise().query(`INSERT INTO questions (subject_id, question, answer1, answer2, answer3, answer4, answer5, correctanswer)
          VALUES ('${req.body.subject_id}','${req.body.question}',' ${req.body.answer1}','${req.body.answer2}',
          '${req.body.answer3}', '${req.body.answer4}' , '${req.body.answer5}' , '${req.body.correctanswer}')`);
        
        res.status(201).json({ massage: 'success' });
    } catch(err) {
        res.status(400).json(err);
    }
})
  


// http://localhost:4000/users/login
// router.post('/login', async(req, res) => {
//     try {
//         const response = await db.promise().query(`SELECT * FROM users WHERE username = '${req.body.username}' `);
//         // user found in db
//         if(response[0].length > 0) {
//             //password matched
//             // console.log(response[0][0].password, req.body.password);
//             if(response[0][0].password == req.body.password) {
//                 // res.status(202).json(response[0]);
//                 res.status(202).json({message: 'Successfully logged in'});
//             }
//             //password not matched
//             else {
//                 res.status(401).json({message: 'Incorrect Password'});
//             }
//         }
//         // user not found
//         else {
//             res.status(422).json({message: 'User Not Found'});
//         }        
//     } catch(err) {
//         // console.log(err);
//         res.status(400).json(err);
//     }
// })

http://localhost:4000/users/updateuserpassword
router.put('/editquestion', async(req, res) => {
    try {
        console.log(req.body);
        const response = await db.promise().query(`UPDATE users SET question = '${req.body.question}',
        answer1 = '${req.body.answer1}', answer2 = '${req.body.answer2}',
        answer3 = '${req.body.answer3}', answer4 = '${req.body.answer4}',
        answer5 = '${req.body.answer5}',
        WHERE qs_id = '${req.body.qs_id}'`);
        console.log(response);
        res.status(200).json(response[0]);
    } catch(err) {
        // console.log(err);
        res.status(400).json({ massage: err.massage });
    }
})

module.exports = router;