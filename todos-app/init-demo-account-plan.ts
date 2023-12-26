import { ResetMode, initialize } from '@prici/sdk';


const sdk = initialize({
  token: process.env.PRICI_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiJkZWZhdWx0IiwiaWQiOiIxIn0.jSp5c6WCjtJ5E5c2325pWzMsaxpwDJnr6TcPcE2xTKA',
  priciUBaseUrl: 'http://0.0.0.0:9000'
});

(async () => {
  const plan = await sdk.Plan.findFirst({ name: 'basic' })

  console.log('basic plan', plan)

  const account = await sdk.AccountPlan.insert({
    accountId: 'demo-2',
    plan: plan,
    resetMode: ResetMode.Manual,
  })

  console.log('account', account);

})().catch(console.error)
