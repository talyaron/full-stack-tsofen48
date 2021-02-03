const express = require('express');
const app = express();

const voting = [{disApprovePer: '20%' ,ApprovePer: '80%' }]
  


exports.getVoting =  (req, res) => {

    res.send({ ok: true, voting });
};
