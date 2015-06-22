Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/',{
    name: ('camera')
});

Router.route('/photos',{
    name: 'pictureList'
});

Router.route('/photos/:_id',{
    name: 'pictureItemPage',
    data: function(){
        return Pictures.findOne({_id: this.params._id});
                    }
});

Router.route('/profile', {
    name: 'profile',
    data: function(){
        return;
    },
    onBeforeAction: function(){
     if(!Meteor.userId()){
         this.render('camera');
     } else {
         this.next();
     }
    }
});

Router.route('/the-list', {
    name: 'theList'
});

Router.route('/the-list/:_id',{
    name:'listItemPage',
    data: function(){
        return Pictures.findOne({_id:this.params._id});
    }
});

Router.route('/responsibilities',{
    name:'responsibilitiesList'
});

Router.route('/responsibilities/:_id',{
    name:'responseItemPage',
    data: function(){
        return Pictures.findOne({_id:this.params._id});
    }
});