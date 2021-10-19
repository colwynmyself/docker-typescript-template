import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('/healthz', (req, res) => {
  res.json({
    alive: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
