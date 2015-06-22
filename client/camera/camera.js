
Template.camera.onRendered(function(){
    
});

Template.camera.events({              
    "change #inPicture" : function(event) {
        var files = $('#inPicture')[0].files;
        var fileReader = new FileReader();
        var numberOfFiles = 0;
                var data = [];

        fileReader.onload = function(fileLoadedEvent){     
    Meteor.call("insertPicture",fileLoadedEvent.target.result); 
            if(numberOfFiles<files.length){
 fileReader.readAsDataURL(files[numberOfFiles++]);
            }else{
                                                          
$("#pictureButton").addClass("success");}
        };
        
 fileReader.readAsDataURL(files[numberOfFiles++]);
        
       
    },
    "click #pictureButton": function(){
 document.getElementById("inPicture").click();
    }
});
