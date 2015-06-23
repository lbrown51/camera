Template.profile.helpers({
    userName: function(){
     return Meteor.user().profile.name.toString().toUpperCase();   
    }
});

Template.profile.events({
    "click #saveProfile": function(){
        var credentials = [];
        $(':checked').each(function(){
            credentials.push(this.id);
        });
        Meteor.call("updateProfile",credentials);
        $("#saveProfile").addClass("success");
    },
    
    "click #logout": function(){
        Meteor.logout();
    }
});

Template.profile.onRendered(function(){

});