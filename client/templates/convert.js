import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Session.set('percent', 0);
Session.set('mmol', 0);

//var_conv = (((parseFloat(var_in1) - 2.15) * 10.929)); %-> mmol/mmol
Template.convert.events({
  'submit form':(event, template)=>{
    event.preventDefault();
    Session.set('mmol', 0);
    Session.set('percent', 0);
    event.target.percentage.value = "";
    event.target.mmol.value = "";
  },
  'input #percentage':(event)=>{
    Session.set('percent', event.currentTarget.value);
  },
  'input #mmol':(event)=>{
    Session.set('mmol', event.currentTarget.value);
  }
});

Template.convert.helpers({
  'mmol':()=>{
    var percent = Session.get('percent');
    if (percent != 0) {
      return Math.round((percent-2.15)*10.929)
    }
  },
  'percent':()=>{
    var mmol = Session.get('mmol');
    if (mmol != 0) {
      var percent = Math.round(((mmol / 10.929) + 1.12)*10)/10;
      return percent;
    }
  },
  'eag_mgdl':()=>{
    var percent = Session.get('percent');
    var mmolmol = Session.get('mmol');
    if (percent !=0) {
      var mmol = (28.7 * percent - 46.7).toFixed(1);
      return mmol + " mg/dl";
    } else if (mmolmol != 0) {
      var percentage = Math.round(((mmolmol / 10.929) + 1.12)*10)/10;
      return (((28.7 * percentage - 46.7)/18).toFixed(1) * 18) + " mg/dl";
    }else {
      return "";
    }
  },
  'eag_mmol':()=>{
    var percent = Session.get('percent');
    var mmolmol = Session.get('mmol');
    if (percent !=0) {
      var mmol = ((28.7 * percent - 46.7)/18).toFixed(1);
      return mmol + " mmol/L";
    } else if(mmolmol != 0){
      var percentage = Math.round(((mmolmol / 10.929) + 1.12)*10)/10;
      return ((28.7 * percentage - 46.7)/18).toFixed(1) + " mmol/L";
    } else {
      return "";
    }
  },
  'isVisible':()=>{
    var percent = Session.get('percent');
    var mmol = Session.get('mmol');
    if (percent != 0 || mmol != 0) {
      return true;
    } else {
      return false;
    }
  }

});
