import express from 'express'

// const express = require('express')
const app = express()
const port = 3000


// transactionAmount: number;
// transactionDescription: string;
let transactions = []

app.get('/transactions', (req, res) => {
  res.send(transactions)
})

app.post('/save-transaction', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})