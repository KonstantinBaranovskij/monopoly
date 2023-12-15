import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

// Пример маршрута
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

export default app;