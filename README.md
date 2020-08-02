# sixcarbons
## Clinical calculators for all things glucose
----------------------
So far this code covers three broad functions
1. It calculates glucose requirement from intravenous dextrose and milk feed rates expressed in mg/kg/min
2. For those working in children's diabetes, it allows the user to set up a virtual pump with time blocks and rates based on different insulin pumps on the UK market. It is possible to increase and reduce rates for different timeblock by prescribed percentages and calculate total daily doses as an experiment prior to making the changes for real on the pump.
3. Insulin pump set up - for clinicians wishing to start children on an insulin pump, it is common practice to use the 'Bill Lamms' model, which exists usually as a spreadsheet which autopopulates the rates for different ages based on total daily doses provided. This uses the same algorithm but allows the user to personalise the times based on children's normal meal/snack and bedtimes.
4. HbA1c converter. This exists elsewhere but is included here also. Now that the UK standard for HbA1c is in mmol/mol, rather than as a DCCT percentage, a calculator is provided for those who are still acclimatising to the new currency.

### Glucose in mg/kg/min

#### Why would I need it?
Babies with hyperinsulinism will present often in the first hours of life with hypoglycaemia, and can have very large glucose requirements. The diagnosis of hyperinsulinism is based on, apart from the biochemistry taken at time of hypoglycaemia (glucose below 3 mmol/L, absent ketones, measureable insulin, normal acyl carnitine profile/urine organic acids), on the total dextrose requirement across 24 hours. This is difficult to calculate when babies are on milk feeds, harder still when they are on a combination of intravenous dextrose of differing concentrations as well as milk feeds.

If you are trying to work out a glucose requirement to include milk intake and iv dextrose. It contains the carbohydrate values for most infant formulas in the UK, taken from:
> Infant Milks in the UK: A Practical Guide for Health Professionals – February 2016 Authors: Dr Helen Crawley and Susan Westland ISBN 978-1-908924-25-4

Specialised Infant Formula composition values are taken from:
> Additional Information for Health Professionals March 2013, Authors: Susan Westland and Helen Crawley ISBN 978-1-908924-08-7

The clinician wound enter all carbohydrate intake, be it dextrose infusion or milk. This last part is the trick bit because it can be hard to work out how many grammes of carbohydrate there is in the various proprietry milks. This bit is done from the published values in the reference above.

The user can therefore enter:
ml/hr and percentage of dextrose in the infusion
ml/hr and type of milk
weight of the infant or child

These will be converted to total glucose intake in grams in 24 hours, and expressed as mg/kg/min.



### *Time blocks for a Medtronic insulin pump*
If you sit in clinic and fiddle with insulin pumps, it is often helpful to know a total insulin dose in a given timeblock, and you may want to increase or reduce that by 10 or 20%. Sometimes there are too many timeblocks and it would be helpful to see what it would look like if some blocks were merged. This tool allows you to experiment with different insulin schedules, look at the totals (per kg if necessary), before programming the pump for real.

See it in action: [www.sixcarbons.xyz](https://aqueous-fortress-86825.herokuapp.com)

###### *HbA1c Converter and estimated average glucose calculator*
Convert the HbA1c between mmol/mol (IFCC) and percentage (DCCT), and calculate the estimated average glucose.

##### License
MIT
