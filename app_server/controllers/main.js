/* GET home page */
const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://wsrender.onrender.com';
}
const MainPage = function(req, res){
res.render('MainPage', { title: 'Main Page',pageHeader:{title:'Game Reviews'} });
};

const SignIn = function(req, res){
res.render('SignIn', { title: 'Sign In' });
};

const SignUp = function(req, res){
res.render('SignUp', { title: 'Sign Up' });
};
const Reviews = {
    url : apiOptions.server + '/api/reviews',
    method : 'GET',
    json : {},
};
module.exports = {
    MainPage,
    SignIn,
    SignUp,
    Reviews
};