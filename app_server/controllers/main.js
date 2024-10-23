/* GET home page */
const MainPage = function(req, res){
res.render('MainPage', { title: 'Main Page' });
};
const SignIn = function(req, res){
res.render('SignIn', { title: 'Sign In' });
};
const SignUp = function(req, res){
res.render('SignUp', { title: 'Sign Up' });
};
module.exports = {
    MainPage,
    SignIn,
    SignUp
};