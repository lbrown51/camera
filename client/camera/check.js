Template.check.helpers({
    imageData: function(){
        return Session.get('imageData');}
});

Template.check.events({
    "click #yes" : function(){
        Meteor.call("insertPicture",Session.get('imageData'));
        Router.go('/');
    },
    "click #no" : function(){
     Session.set('imageData',"");
    Router.go('/');
    }
});