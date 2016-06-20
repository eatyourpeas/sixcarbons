function TimeBlock(timeblock, starthours, startminutes, stophours, stopminutes, rate, totalhours, totalinsulin) {
    this.timeblock = timeblock;
    this.starthours = starthours;
    this.startminutes = startminutes;
    this.stophours = stophours;
    this.stopminutes = stopminutes;
    this.rate = rate;
}

medtronicRates = [0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.225, 0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5, 0.525, 0.55, 0.575, 0.6, 0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9, 0.925, 0.95, 0.975, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6, 1.65, 1.7, 1.75, 1.8, 1.85, 1.9, 1.95, 2, 2.05, 2.1, 2.15, 2.2, 2.25, 2.3, 2.35, 2.4, 2.45, 2.5, 2.55, 2.6, 2.65, 2.7, 2.75, 2.8, 2.85, 2.9, 2.95, 3, 3.05, 3.1, 3.15, 3.2, 3.25, 3.3, 3.35, 3.4, 3.45, 3.5, 3.55, 3.6, 3.65, 3.7, 3.75, 3.8, 3.85, 3.9, 3.95, 4, 4.05, 4.1, 4.15, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15, 5.2, 5.25, 5.3, 5.35, 5.4, 5.45, 5.5, 5.55, 5.6, 5.65, 5.7, 5.75, 5.8, 5.85, 5.9, 5.95, 6, 6.05, 6.1, 6.15, 6.2, 6.25, 6.3, 6.35, 6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.7, 6.75, 6.8, 6.85, 6.9, 6.95, 7, 7.05, 7.1, 7.15, 7.2, 7.25, 7.3, 7.35, 7.4, 7.45, 7.5, 7.55, 7.6, 7.65, 7.7, 7.75, 7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2, 8.25, 8.3, 8.35, 8.4, 8.45, 8.5, 8.55, 8.6, 8.65, 8.7, 8.75, 8.8, 8.85, 8.9, 8.95, 9, 9.05, 9.1, 9.15, 9.2, 9.25, 9.3, 9.35, 9.4, 9.45, 9.5, 9.55, 9.6, 9.65, 9.7, 9.75, 9.8, 9.85, 9.9, 9.95, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15];

Template.insulin.created = function () {
    // counter starts at 0

    var firstBlock = new TimeBlock();
    firstBlock.timeblock = 0;
    firstBlock.rate = 0.025;
    firstBlock.starthours = "00";
    firstBlock.startminutes = "00";
    firstBlock.stophours = "01";
    firstBlock.stopminutes = "00";
    var timeblockarray = [];
    var selectedarray = [];
    timeblockarray[0] = firstBlock;
    Session.set('timeblock', timeblockarray);
    Session.set('selectedTimeBlocks', selectedarray);
    Session.set('weight', 0);
    Session.set('totalHours', 0);
    Session.set('totalUnits', 0);

  };


Template.insulin.events({
  'click #insulinAdd': function(event, template){
    event.preventDefault();

    //get selected timeblock
    var events = Session.get('timeblock');
    var timeblockselected = this.thistimeblock.timeblock

    currentTimeBlock = events[timeblockselected];

    //create new time block - previous time block stop time = start time of this, add one hour for stop

    var nextTimeBlock = new TimeBlock();
    nextTimeBlock.timeblock = parseInt(timeblockselected) + 1;
    nextTimeBlock.starthours = currentTimeBlock.stophours;
    nextTimeBlock.startminutes = currentTimeBlock.stopminutes;
    var nextHours = parseInt(nextTimeBlock.starthours) + 1;
    nextTimeBlock.stophours = addZeroAndStringifyIfUnderTen(nextHours);
    nextTimeBlock.stopminutes = '00';

    nextTimeBlock.rate = 0.025;
    var next = parseInt(timeblockselected)+1;
    events[next] = nextTimeBlock;
    Session.set('timeblock', events);
  },
  'click #insulinDelete': function(event, template){
    event.preventDefault();
    var timeBlockToRemoveID = this.thistimeblock.timeblock;
    var events = Session.get('timeblock');
    var timeBlockToRemove = events[timeBlockToRemoveID];
    startHoursOfTimeBlockToRemove = timeBlockToRemove.starthours;
    startMinutesOfTimeBlockToRemove = timeBlockToRemove.startminutes;

    events.splice(timeBlockToRemoveID, 1);

    var nextInSequence = parseInt(timeBlockToRemoveID)+1;
    for (var i = timeBlockToRemoveID; i < events.length; i++) {
      var newEvent = events[i];
      if (i==timeBlockToRemoveID) {
        newEvent.starthours = timeBlockToRemove.starthours;
        newEvent.startminutes = timeBlockToRemove.startminutes;
      }
      newEvent.timeblock = i;
      events[i] = newEvent;
    }

    Session.set('timeblock', events);
  },
  'click #increase10': function(){
    event.preventDefault();
    var myblock = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var newRate = (((this.thistimeblock.rate)*(110))/100).toFixed(3);
    var rateToReturn = closest(medtronicRates, newRate);
    timeblocks[myblock].rate = "" + rateToReturn;
    Session.set('timeblock', timeblocks);

  },
  'click #decrease10': function(){
    event.preventDefault();
    var myblock = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var newRate = (((this.thistimeblock.rate)*(90))/100).toFixed(3);
    var rateToReturn = closest(medtronicRates, newRate);
    timeblocks[myblock].rate = "" + rateToReturn;
    Session.set('timeblock', timeblocks);
  },
  'click #mergetimeblocks': function(){
    event.preventDefault();
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var timeblocks = Session.get('timeblock');

    var numberOfSelectedBlocks = selectedTimeBlocks.length;
    if (numberOfSelectedBlocks == 1) {
      //cannot merge only one block
      console.log('cannot merge only one block');
      return;
    }

    var firstSelectedBlockID = selectedTimeBlocks[0];
    var finalTimeBlockID = selectedTimeBlocks[numberOfSelectedBlocks-1];

    var starthours = timeblocks[firstSelectedBlockID].starthours;
    var startminutes = timeblocks[firstSelectedBlockID].starthours;

    var stophours = timeblocks[finalTimeBlockID].stophours;
    var stopminutes = timeblocks[finalTimeBlockID].stopminutes;

    var hours = 0;
    var units = 0;

    for (var i = 0; i < selectedTimeBlocks.length; i++) {
      var thisTimeBlockID = selectedTimeBlocks[i];
      var thisTimeBlock = timeblocks[thisTimeBlockID];
      var thisHours = totalHours(thisTimeBlock);
      hours += thisHours;
      var allUnits = totalUnits(thisHours, thisTimeBlock);
      units += parseFloat(allUnits);
      if (i != 0) {
        timeblocks.splice(thisTimeBlockID, 1);
      }
    }
    var newRate = (units/hours).toFixed(3);

    if (hours % 1 == 0) {
      // this is an integer
      var endtime = 0;
      endtime = parseInt(hours) + parseInt(starthours);

      timeblocks[firstSelectedBlockID].stophours = addZeroAndStringifyIfUnderTen(endtime);
      timeblocks[firstSelectedBlockID].stopminutes = "00";


    } else {
      var remainder = hours % 1;
      var myhours = hours - remainder;
      var endhours = parseInt(myhours) + parseInt(starthours);
      if (remainder*60 < 30) {
        remainder = '00';
      } else {
        remainder = '30';
      }

      timeblocks[firstSelectedBlockID].stophours = myhours;
      timeblocks[firstSelectedBlockID].stopminutes = remainder;
    }
    var rateToReturn = closest(medtronicRates, newRate);
    timeblocks[firstSelectedBlockID].rate = rateToReturn;

    var nextBlockAddress = firstSelectedBlockID + (numberOfSelectedBlocks);

    ///change ids of subsequent blocks & match up start times
    for (var j = firstSelectedBlockID; j < timeblocks.length; j++) {
      timeblocks[j].timeblock = j;
      if (j != firstSelectedBlockID) {
        var newhours = timeblocks[j-1].stophours;
        var newminutes = timeblocks[j-1].stopminutes;
        timeblocks[j].starthours = newhours;
        timeblocks[j].startminutes = newminutes;
        /*
        if (j == timeblocks.length - 1) {
          //last block
          timeblocks[j].stophours = "24";
          timeblocks[j].stopminutes = "00";
        }
        */
      }
    }

    /// wrap up
    selectedTimeBlocks = [];
    Session.set('selectedTimeBlocks', selectedTimeBlocks);
    console.log(timeblocks);
    Session.set('timeblock', timeblocks);

  },
  'submit #schedule': function(){
    event.preventDefault();
    var weight = event.target.weight.value;
    Session.set('weight', weight);
  }

});

Template.insulin.helpers({
  timeblocks: function(){
    return Session.get('timeblock');
  },
  totalBasalRate: function(){
    var timeblocks = Session.get('timeblock');
    var totalinsulin = 0;
    for (var i = 0; i < timeblocks.length; i++) {
      var thistimeblock = timeblocks[i];
      var thisBlocksHours = totalHours(thistimeblock);
      var thisBlocksInsulin = totalUnits(thisBlocksHours, thistimeblock);
      totalinsulin += parseFloat(thisBlocksInsulin);
    }
    Session.set('totalUnits', totalinsulin.toFixed(3));
    return totalinsulin.toFixed(3);
  },
  totalHoursUsed: function(){
    var timeblocks = Session.get('timeblock');
    var totalhours = 0;
    for (var i = 0; i < timeblocks.length; i++) {
      var thistimeblock = timeblocks[i];
      var thisBlocksHours = totalHours(thistimeblock);
      totalhours += parseFloat(thisBlocksHours);
    }
    Session.set('totalHours', totalhours);
    return totalhours.toFixed(1);
  },
  selectedTotalUnits: function(){
    var timeblocks = Session.get('timeblock');
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var totalinsulin = 0;
    if (selectedTimeBlocks.length > 0) {
      for (var i = 0; i < selectedTimeBlocks.length; i++) {
        var selectedTimeBlock = selectedTimeBlocks[i];
        var timeblock = timeblocks[selectedTimeBlock];
        var hours = totalHours(timeblock);
        var insulin = totalUnits(hours, timeblock);
        totalinsulin += parseFloat(insulin);
      }
    }
    return totalinsulin.toFixed(3);
  },
  selectedTotalHours: function(){
    var timeblocks = Session.get('timeblock');
    var selectedTimeBlocks = Session.get('selectedTimeBlocks');
    var totalhours = 0;
    if (selectedTimeBlocks.length > 0) {
      for (var i = 0; i < selectedTimeBlocks.length; i++) {
        var selectedTimeBlock = selectedTimeBlocks[i];
        var timeblock = timeblocks[selectedTimeBlock];
        var hours = totalHours(timeblock);
        totalhours += parseFloat(hours);

      }
    }
    Session.set('totalHours', totalhours.toFixed(1));
    console.log(totalhours.toFixed(1));
    return totalhours.toFixed(1);
  },
  isVisible: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if ( selectedBlocks.length > 0) {
      return true;
    } else {
      return false;
    }
  },
  thereAreMoreThanTwoBlocks: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if (selectedBlocks.length > 1) {
      return true;
    } else {
      return false;
    }
  },
  weightIsEntered: function(){
    var weight = Session.get('weight');
    if (weight > 0) {
      return true;
    } else {
      return false;
    }
  },
  weightClass: function(){
    var weight = Session.get('weight');
    if (weight > 0) {
      return 'weightRow';
    } else {
      return 'noWeightRow';
    }
  },
  totalBasalRatePerKg: function(){
    var weight = Session.get('weight');
    var totalInsulin = Session.get('totalUnits');
    var totalHours = Session.get('totalHours');
    console.log(totalInsulin);
    return (totalInsulin/weight).toFixed(1);
  }
});

Template.datesEntry.helpers({

  rates: function(){
    return medtronicRates;
  },

  doDatesMatch: function(){

    var timeblockId = this.thistimeblock.timeblock;
    var timeblocks = Session.get('timeblock');
    var numberOfTimeBlocks = timeblocks.length;

    var starthours = parseInt(this.thistimeblock.starthours);
    var startminutes = parseInt(this.thistimeblock.startminutes);
    var stophours = parseInt(this.thistimeblock.stophours);
    var stopminutes = parseInt(this.thistimeblock.stopminutes);

    if (stopminutes == "00") {
      stopminutes = 0;
    }
    if (startminutes == '00') {
      startminutes = 0;
    }
    if (starthours == "00") {
      starthours = 0;
    }
    if (stophours == '00') {
      stophours = 0;
    }

    if (numberOfTimeBlocks>1) {
      //check for consistency between start and end of blocksArray
      if (timeblockId > 0) {
        // test block before
        var previousBlock = timeblocks[timeblockId-1];

        if (previousBlock.stophours != starthours || parseInt(previousBlock.stopminutes) != startminutes) {
          return 'pickerRed';
        }
/*
        if (timeblockId < numberOfTimeBlocks-1) {
          //there are timeblocks after mine
          var nextBlock = timeblocks[timeblockId +1];
          if (nextBlock.starthours != stophours || parseInt(nextBlock.startminutes)!= stopminutes) {
              return 'pickerRed';
          }
        }
*/
      }
    }
    if (starthours > stophours) {

      return 'pickerRed';
    } else {
      return 'picker';
    }
  },

  isLastPicker: function(timeblock){

    var blocksArray = Session.get('timeblock');
    var numberInArray = blocksArray.length;
    if (parseInt(timeblock) == numberInArray-1) {
      return true;
    } else {
      return false;
    }

  },
  isSelected: function(parameter, picker){

    var timetocompare = "";

    if (picker == 'timefromHours') {
      timetocompare = this.thistimeblock.starthours;
    } else if (picker == 'timefromMinutes') {
      timetocompare = this.thistimeblock.startminutes;
    } else if (picker = 'timetoHours') {
      timetocompare = this.thistimeblock.stophours;
    } else if (picker = 'timetoMinutes') {
      timetocompare = this.thistimeblock.stopminutes
    }

    if (timetocompare == parameter) {

      return 'selected';
    } else {
      return '';
    }
  },
  isSelectedRate: function(parameter){
    var rateToCompare= this.thistimeblock.rate;

    if (rateToCompare==parameter) {

      return 'selected';
    } else {
      return '';
    }
  },
  calculateTotalHours: function(){
    var totalhours = totalHours(this.thistimeblock);
    return totalhours;
  },
  calculateTotalUnits: function(hours){
    var totalunits = totalUnits(hours, this.thistimeblock);
    return totalunits;
  },
  isChecked: function(){
    var selectedBlocks = Session.get('selectedTimeBlocks');
    if (selectedBlocks.length > 0) {

      var i = selectedBlocks.indexOf(this.thistimeblock.timeblock);
      if (i != -1) {
        return 'checked';
      } else {
        return ''
      }
    }
  },
  isFirstBlock: function(){
    if (this.thistimeblock.timeblock == 0) {
      return true;
    } else {
      return false;
    }
  }
});

Template.datesEntry.events({

  'change .picker': function (){
    pickerChange(event);
  },
  'change .pickerRed': function(){
    pickerChange(event);
  },
  'change #rate': function(){
    var rateSelected = parseFloat(event.target.value);
    var blockSelected = parseInt(event.target.name);
    var blocks = Session.get('timeblock');
    var blockToChange = new TimeBlock();
    blockToChange = this.thistimeblock;
    blockToChange.rate = rateSelected;
    blocks[blockSelected] = blockToChange;
    Session.set('timeblock', blocks);
  },
  'change #timeblockSelect': function(){

    var selectedBlocks = Session.get('selectedTimeBlocks');

    if(event.target.checked){
      selectedBlocks.push(this.thistimeblock.timeblock);
      Session.set('selectedTimeBlocks', selectedBlocks);
    } else {
      if (selectedBlocks.length > 0) {
        var i = selectedBlocks.indexOf(this.thistimeblock.timeblock);
        if (i != -1) {
          selectedBlocks.splice(i, 1);
          Session.set('selectedTimeBlocks', selectedBlocks);
        }
      }
    }
  }
});


function pickerChange(event){
  var timetoevent = event.target.value;
  var timeblock = event.target.name;

  var timeblocks = Session.get('timeblock');
  var timeblocktoupdate = new TimeBlock();

  timeblocktoupdate = timeblocks[timeblock];

  var pickerId = event.target.id;

  if (pickerId == 'timefromhourpicker') {
    timeblocktoupdate.starthours = timetoevent;
  }
  if (pickerId == 'timefromminutepicker') {
    timeblocktoupdate.startminutes = timetoevent;
  }
  if (pickerId == 'timetohourpicker') {
    timeblocktoupdate.stophours = timetoevent;
  }
  if (pickerId == 'timetominutepicker') {
    timeblocktoupdate.stopminutes = timetoevent;
  }

  timeblocks[timeblock] = timeblocktoupdate;

  Session.set('timeblock', timeblocks);

  //will this update affect blocks that follow?

  if (timeblocks.length > (parseInt(timeblock)+1)) {

    checkThisTimeBlockDoesNotEndAfterNext(timeblocks, timeblocktoupdate);
  }
}


function checkThisTimeBlockDoesNotEndAfterNext (allblocks, myblock){
  var numberOfBlocksAfterMe = allblocks.length - (parseInt(myblock.timeblock) + 1);

  //test next block
  var stophours = parseInt(myblock.stophours);
  var stopminutes = parseInt(myblock.stopminutes);
  var arrayaddress = myblock.timeblock;

  var nextBlock = new TimeBlock;
  nextBlock = allblocks[arrayaddress+1];
  var nextstarthours = parseInt(nextBlock.starthours);
  var nextstartminutes = parseInt(nextBlock.startminutes);

  if (nextstarthours != stophours || nextstartminutes != stopminutes) {

    //end of selected block is after beginning of next block
    //reset start of next time block to new time

    nextBlock.starthours = addZeroAndStringifyIfUnderTen(stophours);
    nextBlock.startminutes = addZeroAndStringifyIfUnderTen(stopminutes);
    nextBlock.stophours = addZeroAndStringifyIfUnderTen(stophours+1);
    nextBlock.stopminutes = addZeroAndStringifyIfUnderTen(stopminutes);
    var nextBlockArrayAddress = arrayaddress + 1;
    nextBlock.timeblock = nextBlockArrayAddress;
    allblocks[nextBlockArrayAddress] = nextBlock;
    if (numberOfBlocksAfterMe > 1) {
      //there is more than one block affected - loop through and alter

      var subsequentBlock = new TimeBlock();
      var lastBlock = new TimeBlock();
      lastBlock = nextBlock;
      for (var i = 1; i < numberOfBlocksAfterMe; i++) {
        var subsequentBlockArrayAddress = (parseInt(lastBlock.timeblock)) + 1;
        subsequentBlock = allblocks[subsequentBlockArrayAddress];
        subsequentBlock.starthours = lastBlock.stophours;
        subsequentBlock.startminutes = lastBlock.stopminutes
        var addAnHour = (parseInt(subsequentBlock.starthours))+1;

        subsequentBlock.stophours = addZeroAndStringifyIfUnderTen(addAnHour);
        subsequentBlock.stopminutes = lastBlock.stopminutes;

        allblocks[subsequentBlockArrayAddress] = subsequentBlock;

        lastBlock = subsequentBlock;
      }
    }
    Session.set('timeblock', allblocks);


  }
}

function convertToDecimalAndStringify(numberToAmend){
  if (isInt(numberToAmend) ) {
    console.log('i am a number');
  }
}

function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}

function addZeroAndStringifyIfUnderTen(numberToAmend){
  var stringNumber = '';
  if (numberToAmend < 10) {
    stringNumber = '0'+numberToAmend;
  } else {
    stringNumber = ''+numberToAmend;
  }
  return stringNumber;
}

function closest(array,num){
    var i=0;
    var minDiff=1000;
    var ans;
    for(i in array){
         var m=Math.abs(num-array[i]);
         if(m<minDiff){
                minDiff=m;
                ans=array[i];
            }
      }
    return ans;
}

function totalHours(timeblock){
  var rate = timeblock.rate;
  var starthours = timeblock.starthours;
  var startminutes = timeblock.startminutes;
  var stophours = timeblock.stophours;
  var stopminutes = timeblock.stopminutes;
  if (stopminutes == "00") {
    stopminutes = 0;
  }
  if (startminutes == '00') {
    startminutes = 0;
  }

  var totalMinutes = stopminutes - startminutes;
  var totalhours = (stophours - starthours)+(totalMinutes/60);

  return totalhours;
}

function totalUnits(hours, timeblock){
  var rate = timeblock.rate;
  var totalinsulin = (rate * hours).toFixed(3);

  return totalinsulin;
}
