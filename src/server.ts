import express from 'express'
import { emailRouter, submissionRouter } from './routers';

// create and setup express app
const app = express();
app.use(express.json());

app.use('/emails', emailRouter)
app.use('/submissions', submissionRouter)

// start express server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}}`));
