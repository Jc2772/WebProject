/* GET home page */
const MainPage = function(req, res){
res.render('index', { title: 'Main Page' });
};
const SignIn = function(req, res){
res.render('SignIn', { title: 'Sign In' });
};
module.exports = {
    MainPage,
    SignIn
};