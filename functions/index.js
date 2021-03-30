const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('sk_test_51Ia6G1SGQbzp4mDU0N4lf5hQvRRHS2tbf3PRMgZ9e7Rb2bPOSMvuvrYUUP6ekVdNlTuks0jr2gWzPp6E1zaVhrH100KMMyJo0h')


//api

//app config
const app=express();


//middleware
app.use(cors({origin:true}))
app.use(express.json());

//api routes
app.get('/',(req,res)=>{
    res.status(200).send("hello world");
})

app.post('/payments/create',async(req,res)=>{
    const total=req.query.total;
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

//listen
exports.api=functions.https.onRequest(app);