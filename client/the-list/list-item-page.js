Template.listItemPage.events({
   "click #takeResponse":function(){
Meteor.call("takeResponsibility", this,Meteor.user()); 
       $("#takeResponse").addClass("success");
   }
});