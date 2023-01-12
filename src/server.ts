import express from 'express'
import { emailRouter, submissionRouter } from './routers';

// create and setup express app
const app = express();
app.use(express.json());

app.use('/emails', emailRouter)
app.use('/submissions', submissionRouter)

// start express server
app.listen(3000, () => console.log('Server is running on port 3000'));
