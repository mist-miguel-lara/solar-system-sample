import express from 'express';
const planets = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('home')
});
app.get('/mercury', (req, res) => {
   let mercuryInfo = planets.getMercury()
   res.render('mercury', {"mercury":mercuryInfo})
});
app.get('/venus', (req, res) => {
   res.render('venus')
});
app.get('/earth', (req, res) => {
   res.render('earth')
});
app.get('/mars', (req, res) => {
   res.render('mars')
});
app.get('/nasa', async (req, res) => {
	res.render('nasa')
});

app.listen(3000, () => {
   console.log('server started');
});