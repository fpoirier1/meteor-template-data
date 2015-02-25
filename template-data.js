if (Meteor.isClient) {
  Template.component.rendered = function(){
    console.log("rendered", Template.instance())
  }

  Template.component.helpers({
    classes: function () {
      console.log("helper", Template.instance())
      return "component";
    }
  });
}