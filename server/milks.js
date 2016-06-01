//g/100ml carbohydrate including lactose, source: Infant Milks in the UK: A Practical Guide for Health Professionals – February 2016 Authors: Dr Helen Crawley and Susan Westland ISBN 978-1-908924-25-4
// and Specialised Infant Formula in the UK: Additional Information for Health Professionals March 2013, Authors: Susan Westland and Helen Crawley ISBN 978-1-908924-08-7

function Milk(name, grams) {
    this.name = name;
    this.grams = grams;
}

function convertToObject(array){
  var arrayOfObjects = [];
  var thisMilk = new milk();
  for (var i = 0; i < array.length; i=i+2) {
    thisMilk.name = array[i];
    arrayOfObjects.push(thisMilk);
  }

  for (var i = 1; i < array.length; i=i+2) {
    var thisMilk = arrayOfObjects[i-1];
    thisMilk.grams = array[i];
  }

}

var allmilks = ['Aptamil 1 First Milk', '7.0',
'Aptamil Profutura 1 First Infant Milk', '7.0',
'Breast Milk (mature)', '7.2',
'Cow & Gate 1 First Infant Milk', '7.4',
'Hipp Organic Combiotic First Infant Milk', '7.3',
'Holle Organic Infant Formula 1', '7.4',
'SMA Pro First Infant Milk', '7.1',
'Holle Organic Infant Goat Milk Formula 1', '7.5',
'Kabrita Gold 1', '7.3',
'NANNYcare First Infant Milk', '7.4',
'Aptamil Hungry Milk', '7.8',
'Cow & Gate Infant Milk for Hungrier Babies', '7.8',
'Hipp Organic Combiotic Hungry Infant Milk', '7.3',
'SMA Extra Hungry', '7.0',
'Aptamil Anti-reflux', '6.8',
'Cow & Gate Anti-reflux', '6.8',
'SMA Staydown', 7.0,
'SMA Wysoy', '6.9',
'Aptamil Lactose Free', '7.3',
'SMA LF', '7.2',
'Aptamil Comfort', '7.2',
'Cow & Gate Comfort', '7.2',
'SMA Comfort', '7.1',
'SMA HA', '7.8',
'Aptamil 2 Follow-on Milk', '8.6',
'Aptamil Profutura 2 Follow-on Milk', '8.8',
'Cow & Gate 2 Follow-on Milk', '8.6',
'Hipp Organic Combiotic Follow-on Milk', '7.9',
'Holle Organic Infant Follow-on Formula', '8.2',
'SMA Pro Follow-on Milk', '7.9',
'Holle Organic Infant Goat Milk Follow-on Formula 2', '8.0',
'Kabrita Gold 2', '8.0',
'NANNYcare Follow-on Milk', '7.4',
'Hipp Organic Good Night Milk', '8.0',
'Full-fate cows milk', '4.6',
'Semi-skimmed cows milk', '4.7',
'Aptamil 3 Growing Up Milk 1-2 Years', '8.5',
'Aptamil Profutura 3 Growing Up Milk', '8.4',
'Cow & Gate 3 Growing Up Milk 1-2 Years', '8.5',
'Hipp Organic Combiotic Growing-up Milk', '8.2',
'Holle Organic Growing-up Milk 3', '8.2',
'PaediaSure Shake', '13.2',
'SMA Pro Toddler Milk 3', '7.0',
'Kabrita Gold 3', '7.9',
'NANNYcare Growing Up Milk', '6.7',
'Alpro Soya +1 Complete Care', '8.3',
'Aptamil 4 Growing Up Milk 2-3 Years', '6.5',
'Cow & Gate 4 Growing Up Milk 2-3 Years', '6.5',
'Aptamil Pepti 1', '7.1', //these are special milks
'Cow & Gate Pepti-junior', '6.8',
'Mead Johnson Nutramigen LIPIL 1', '7.5',
'SHS Nutricia Pepdite', '7.8',
'SHS Nutricia Pepdite MCT', '8.8',
'SHS Nutricia Infatrini Peptisorb', '10.3',
'Aptamil Pepti 2', '8.0',
'Mead Johnson Pregestimil LIPIL', '6.9',
'Mead Johnson Nutramigen LIPIL 2', '8.6',
'SHS Nutricia Pepdite 1+', '13.0',
'SHS Nutricia Pepdite MCT 1+', '11.8',
'Mead Johnson Nutramigen AA', '7.0',
'SHS Nutricia Neocate LCP', '7.2',
'SHS Nutricia GA1 Anamix Infant', '7.4',
'SHS Nutricia HCU Anamix Infant', '7.4',
'SHS Nutricia IVA Anamix Infant', '7.4',
'SHS Nutricia MMA/PA Anamix Infant', '7.4',
'SHS Nutricia MSUD Anamix Infant','7.4',
'SHS Nutricia NKH Anamix Infant', '7.3',
'SHS Nutricia TYR Anamix Infant','7.3',
'Vitaflo PKU start', '8.3',
'Abbott Nutrition Similac High Energy', '10.3',
'SHS Nutricia Infatrini', '10.3',
'SMA High Energy', '9.8',
'Mead Johnson Enfamil AR', '7.6',
'Cow & Gate Infasoy', '7.0',
'SMA Wysoy', '6.9',
'Mead Johnson Enfamil O-Lac', '7.2',
'SMA LF', '7.2',
'Aptamil Preterm', '8.4',
'Cow & Gate Nutriprem 1', '8.4',
'SMA Gold Prem 1', '8.4',
'Cow & Gate Nutriprem 2', '7.5',
'SMA Gold Prem 2', '7.5',
'SHS Nutricia Caprilon', '7.0',
'SHS Nutricia Monogen', '12.0',
'Vitaflo Lipistart', '8.3',
'SHS Nutricia Galactomin 17', '7.3',
'SHS Nutricia Galactomin 19', '6.4',
'SHS Nutricia Kindergen', '11.8',
'Vitaflo Renastart', '12.5'];
