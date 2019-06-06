 // Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const router = require("express").Router();

const stripe = require('stripe')('sk_test_ZhPRczzPc38M67taa8x14w2N00IesVU1LX');



  
router.post('/customer/create', function (req, res, next) {
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

  router.post('/customer/subscribe', function (req, res, next) {
    // Step 1: Grab the plan
    const {
      plan,
      coupon
    } = req.body;

    // Format (in case they copy/paste coupon & a space appears making it invalid)
    plan = plan.toLowerCase();
    plan = plan.trim();

    coupon = coupon.toLowerCase();
    coupon = coupon.trim();


    // Step 2: verify the plan that it's valid
    const plans = ['bronze', 'silver', 'gold'];
    if (plans.indexOf(plan) == -1) {
      return res.send({
        success: false,
        message: 'Invalid plan'
      })
    }

    // Step 3: Grab the current customer id and pull out customer id
    const customerId = '';

    // Step 4: Subscribe.
    const subscription = stripe.subscriptions.create({
      customer: customerId,
      items: [{plan: 'plan'}],
      coupon: coupon
    });
    res.send({
      success: true,
      message: 'Done'
    })
  })



  

module.exports = router;

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