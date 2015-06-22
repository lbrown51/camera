Template.theList.helpers({
  theList: function(){
   return Pictures.find({public:true});   
  }
});