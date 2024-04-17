import express from 'express';
import auth from './routes/auth.route.js';
import property from './routes/property.route.js';
import cors from 'cors';


const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};


const port = process.env.PORT || 3000;



app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Http server
app.listen(port, (req, res) => {
  console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
  res.send('Working fine');
});

app.use('/auth', auth);
app.use('/', property);