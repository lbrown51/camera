Template.pictureItemPage.helpers({
    userName: function(){
        return this.user.profile.name;
    }
});

Template.pictureItemPage.events({
    "click #submitForm": function(){
        var selected= $('#selectClass').val();
     Meteor.call("publishPicture", selected,this._id);
        $("#submitForm").addClass("success");
    }
});
