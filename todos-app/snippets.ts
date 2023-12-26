import express from 'express'
import { initialize } from '@prici/sdk';

const app = express()

// 1. basic crud

const shortid = require('shortid');
const allTodos: any[] = [];

app.get('/api/todos', (_req, res) => {
  res.send(allTodos);
})

app.post('/api/todos', (req, res) => {
  const todo: any = req.body || {}
  todo.id = shortid();
  todo.accountId = 'demo-1'
  allTodos.push(todo);

  res.send(todo)
})

// 2. init plans and demo account
  ```
tsx init-plans.ts
tsx init-demo-account-plan.ts
```


// 3. todos field and status

const sdk = initialize({
  token: process.env.PRICI_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiJkZWZhdWx0IiwiaWQiOiIxIn0.jSp5c6WCjtJ5E5c2325pWzMsaxpwDJnr6TcPcE2xTKA',
  priciUBaseUrl: 'http://0.0.0.0:9000'
});
const todosField = 'todosField'

```
const state = await sdk.getFieldState('account', todosField);

sdk.incrementField('account', todosField).catch(console.error);
```

