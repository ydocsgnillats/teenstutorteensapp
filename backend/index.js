const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const Client = require('emailjs')
const bodyParser =  require('body-parser')

const client = new Client.SMTPClient({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    ssl: true,
})

let jsonParser = bodyParser.json()

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json({ type: 'application/*+json' }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/find', jsonParser, (req, res) => {
	client.send(
	{
		text: "First: " + req.body.first + "\nLast: " + req.body.last + "\nPhone: " + req.body.phone + "\nSubject: " + req.body.subject + "\nGrade: " + req.body.grade + "\nAge: " + req.body.age + "\nState/Timezone: " + req.body.stateZone + "\nEmail: " + req.body.email + "\nPreferred Tutor: " + req.body.tutor + "\nWhere did you hear about us? " + req.body.where + "\nAnything else? " + req.body.anything,
		from: 'TeensTutorTeens-iOS',
		to: '<students@teenstutorteens.com>',    // students@teenstutorteens.com
		subject: 'New Student Signup!'
	},
	(err, message) => {
		console.log(err || message)
	})})
  .post('/apply', jsonParser, (req, res) => {
	client.send(
	{
		text: "First: " + req.body.first + "\nLast: " + req.body.last + "\nEmail: " + req.body.email + "\nWhere did you hear about us? " + req.body.where + "\nAnything else? " + req.body.anything,
		from: 'TeensTutorTeens-iOS',	   // teenstutorteens@gmail.com
		to: '<teenstutorteens@gmail.com>',
		subject: 'New Tutor Signup!'
	},
	(err, message) => {
		console.log(err || message)
	})
	client.send(
	{
		text: 'Thank you for applying to be a tutor, ' + req.body.first + '! Please reply to this email with your resume attached, and we will get back to you soon!',
		from: '<teenstutorteens@gmail.com>',
		to: req.body.email,
		subject: 'RE: Signup to be a tutor'
	},
	(err, message) => {
		console.log(err || message)
	})})
	
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

