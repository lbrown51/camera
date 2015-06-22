Pictures = new Mongo.Collection('pictures');

Meteor.methods({
    insertPicture: function(data){
        if(this.userId){
        check(data,String);
        
        var picObj = {
            data:data, 
            date: new Date(), 
            user: Meteor.user(),
            public: false,
            forClass: null,
            reviewer: null,
        };
        
        var id = Pictures.insert(picObj);
        } else{
            console.log("You must sign in first, silly");    
        }
    },
    updateProfile: function(credentials){
        if(this.userId){
           Meteor.users.upsert( Meteor.users.findOne({_id:this.userId}),{$set:{credentials:credentials}});
            
        } else {
        console.log("You must sign in first, silly"); 
    }
},
    
    publishPicture: function(forClass, ID){
     if(this.userId){
         var picture = Pictures.findOne({_id:ID});
         
       Pictures.upsert(picture,{$set: {public:true,forClass:forClass}});
         
     } else {
      console.log("You must sign in first, silly!");   
     }
    },
    
    takeResponsibility: function(picture,user){
        if(this.userId === user._id){
        var id = Pictures.update(picture,{$set: {reviewer: user, public:false}});
        } else {
             console.log("You must sign in first, silly!"); }
    }
    
});