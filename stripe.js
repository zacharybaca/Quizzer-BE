// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_ZhPRczzPc38M67taa8x14w2N00IesVU1LX');

(async () => {
  const product = await stripe.products.create({
    name: 'My SaaS Platform',
    type: 'service',
  });
})();


