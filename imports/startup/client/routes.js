// set up all routes in the app

//Import to load all of the required templates
import "../../ui/layouts/body/body.js";
import "../../ui/layouts/main/main.js";
import "../../ui/layouts/hidden/hidden.js";
//import "../../ui/layouts/shared/404not_found.html";
import "../../ui/stylesheets/main.css";

//Router Configuration
Router.configure({
    layoutTemplate: 'body-wrapper',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    }
});

//Setup Routes

Router.route('/', {
    name: "main",
    template:"main",
});

Router.route('/hidden', {
    name: "hidden_page",
    template:"hidden_page",
});

Router.plugin('ensureSignedIn', {
    only: ['hidden_page']
});

AccountsTemplates.configure({
    defaultLayout: 'body-wrapper',
});

//Accounts Template Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');