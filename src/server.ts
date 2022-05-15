import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use(categoriesRoutes);


app.listen(3333, () => {
    console.log('server is running on port 3333 🔥')
})

app.get("/", (request, response) => {
    return response.json({ message: "Hello World" })
})