 // Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

const stripe = require('stripe')('sk_test_ZhPRczzPc38M67taa8x14w2N00IesVU1LX');

module.exports = (app) => {

app.post('/api/customer/create', function (req, res, next) {
  const token = req.body.token;
    
  if (!token) {
      return res.send({
        sucess: false,
        message: 'No token'
      })
    }

  stripe.customers.create(
    {source: token},
    function(err, customer) {
      if (err) {
        console.error(err);
      } else {
        res.send({
          success: true,
          customer: customer,
          customerId: customer.id
        })
      }
    }
   )
  }); // end of create customer
}



// (async () => {
//   const plan = await stripe.plans.create({
//     product: 'prod_FC5qFJ57wYzfW6',
//     nickname: 'SaaS Quizzer Platform USD',
//     currency: 'usd',
//     interval: 'month',
//     amount: 10000,
//   });
// })();

// (async () => {
//   const customer = await stripe.customers.create({
//     email: 'jenny.rosen@example.com',
//     source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
//   });
// })();


// (async () => {
//   const subscription = await stripe.subscriptions.create({
//     customer: 'cus_FC5xAjpWFtQcHl',
//     items: [{plan: 'plan_FC5ti529GPCY2Y'}],
//   });
// })();




