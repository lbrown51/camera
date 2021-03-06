Meteor.publish('pictures',function(limit){
    var user = Meteor.users.findOne({_id:this.userId});
   return Pictures.find({user:user},{sort: {date: -1}});
});

Meteor.publish('theList', function(limit){
        var user = Meteor.users.findOne({_id:this.userId});
    var credentials = user.credentials;
    
    return Pictures.find({public:true,forClass:{$in:credentials}},{limit:limit});
});

Meteor.publish('toReview', function(limit){
    var user = Meteor.users.findOne({_id:this.userId});
    Pictures.find({reviewer:user});
});