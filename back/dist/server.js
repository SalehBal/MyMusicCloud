import app from './app.js';
const port = 5000;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
