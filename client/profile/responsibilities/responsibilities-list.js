Template.responsibilitiesList.helpers({
   Responsibility: function(){
    return Pictures.find({reviewer:Meteor.user()});   
   }
});