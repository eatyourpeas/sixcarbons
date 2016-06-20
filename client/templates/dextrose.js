import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



//templates


Template.dextrose.created = function(){

  allMilks = Meteor.call('getMilks', function(error, result){
    if (error) {
      console.log(error);
    } else {

      Session.set('allMilks', result);
      Session.set('selectedMilk', result[0]);
    }
  });

};

Template.dextrose.helpers({
  'totalGlucoseUsage': function(){
    var result = Session.get('totalGlucoseUsage');
    if (result > 0) {
        return result;
    } else {
      return 0;
    }
  },
  'totalMilkGlucoseUsage': function(){
    var result = Session.get('totalMilkGlucoseUsage');
    if (result > 0) {
        return result;
    } else {
      return 0;
    }
  },
  'totalDextroseUsage': function(){
    var result = Session.get('totalDextroseUsage');
    return result;
  },
  'isVisible': function(){

    var result = Session.get('totalGlucoseUsage');
    if (result>0) {
      return true;
    } else {
      return false;
    }
  },
  'milknames': function(){
    return Session.get('allMilks');
  }

});

Template.dextrose.events({
  'submit form': function(event, template){
    event.preventDefault();
    var percentage = event.target.percentage.value;
    var rate = event.target.rate.value;
    var weight = event.target.weight.value;
    var selectedMilk = Session.get('selectedMilk');
    var milkCarbs = selectedMilk.grams;
    var milkRate = event.target.milkrate.value;

    var totalDextroseRate = (percentage * rate)/(6 * weight);

    var volumeOfMilk = (milkRate * 24);
    var concentrationOfMilk = milkCarbs/100;
    var gramsOfMilkCarb = concentrationOfMilk * volumeOfMilk;

    var totalMilkGlucoseInmgperkg = (gramsOfMilkCarb * 1000)/weight;
    var milkmgkgmin = (totalMilkGlucoseInmgperkg/(24*60));

    var mgkgmin = totalDextroseRate + milkmgkgmin;
    Session.set('totalMilkGlucoseUsage', milkmgkgmin.toFixed(2));
    Session.set('totalDextroseUsage', totalDextroseRate.toFixed(2));
    Session.set('totalGlucoseUsage', mgkgmin.toFixed(2));
  },
  'change #milk': function(event){
    var selection = event.target.selectedIndex;
    var allMilks = Session.get('allMilks');
    var myMilk = allMilks[selection];
    Session.set('selectedMilk', myMilk);
  }
});
