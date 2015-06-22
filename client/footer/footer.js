Template.footer.events({
   'click #login': function(){
    Meteor.loginWithGoogle(
        {requestPermissions: ['email']},
        function(error){
            if(error){
                console.log(error.reason);
            }
        }
    );
   }
});

Template.footer.helpers({
    userName: function(){
     return Meteor.user().profile.name;   
    }
});