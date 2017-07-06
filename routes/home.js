/**
 * Created by Kelley on 5/24/2017.
 */
var express = require('express');
var router = express.Router();

/*GET home page*/
router.get('/', function (req,res) {
	res.render('home');
});

router.get('/appetizers', function (req,res) {
	res.render('appetizers');
});

router.get('/beef', function (req,res) {
	res.render('beef');
});

router.get('/vegetables', function (req,res) {
	res.render('vegetables');
});

router.get('/clay', function (req,res) {
	res.render('clay');
});

router.get('/chicken', function (req,res) {
	res.render('chicken');
});

router.get('/drinks', function (req,res) {
	res.render('drinks');
});

router.get('/family', function (req,res) {
	res.render('family');
});

router.get('/lunch', function (req,res) {
	res.render('lunch');
});

router.get('/chow', function (req,res) {
	res.render('chow');
});

router.get('/combo', function (req,res) {
	res.render('combo');
});

router.get('/chifam', function (req,res) {
	res.render('chifam');
});

router.get('/pork', function (req,res) {
	res.render('pork');
});

router.get('/rice', function (req,res) {
	res.render('rice');
});

router.get('/seafood', function (req,res) {
	res.render('seafood');
});

router.get('/soup', function (req,res) {
	res.render('soup');
});

module.exports = router;