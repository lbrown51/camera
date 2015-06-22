Template.pictureList.helpers({
   picture: function(){
       return Pictures.find({},{sort:{date:-1}});
   }
});