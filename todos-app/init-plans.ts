import { FieldKind, initialize } from '@prici/sdk';


const sdk = initialize({
  token: process.env.PRICI_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiJkZWZhdWx0IiwiaWQiOiIxIn0.jSp5c6WCjtJ5E5c2325pWzMsaxpwDJnr6TcPcE2xTKA',
  priciUBaseUrl: 'http://0.0.0.0:9000'
});

(async () => {

  const todosField = await sdk.PlanField.insert({
    name: 'todos',
    kind: FieldKind.Number,
  })

  const descriptionField = await sdk.PlanField.insert({
    name: 'todos-description',
    kind: FieldKind.Boolean,
  })

  console.log('todosField', todosField)
  console.log('descriptionField', descriptionField)

  const plan = await sdk.Plan.insert({
    name: 'basic',
    fields: [
      {
        fieldId: todosField.id,
        value: 3
      }
    ]
  });

  console.log('plan', plan)

  const advancedPlan = await sdk.Plan.insert({
    name: 'advanced',
    fields: [
      {
        fieldId: todosField.id,
        value: 10
      },
      {
        fieldId: descriptionField.id,
        value: true
      }
    ]
  });

  console.log('advancedPlan', advancedPlan)

})().catch(console.error)
