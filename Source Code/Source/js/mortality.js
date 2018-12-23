// implementing using  

let chartval = document.getElementById("newChart");
var displayDataset = 0;
var arrObj = [];
var LoadedDataVal = "";
var colVal = [];
var vSel = [];


//Dataset is retreive using retrieve data function
function retreivedata(vals){
	let DataFrame = dfjs.DataFrame;
   
    LoadedDataVal = vals;
    DataFrame.fromCSV(LoadedDataVal).then(df => 
    {
        data = df.toJSON('DiseaseMortalityJSON.json');  
		displayDataset = data;		
		vSel = df.toArray();
		colVal = df.listColumns();
		var div = document.getElementById('table');
		tableStyleImpleentation(div);
	if(div)
	{
		div.innerHTML = "";
	}
	var TableDisplay = "<table id='dataTable' class='table table-striped table-bordered' align='left' style=' display:block; overflow: auto; overflow-x: visible;' cellspacing='0' width=100% height='500'><thead><tr>";
	for (var i =0; i < colVal.length; i++) {
		TableDisplay+= "<th>" +colVal[i]+ "</th>";
	}
	TableDisplay+= "</tr></thead>";
	TableDisplay+= "<tbody>";
	for (var i = 1; i < vSel.length; i++) {
		TableDisplay+= "<tr>";
		for(var j=0;j<vSel[i].length;j++){
		TableDisplay+= "<td>" +vSel[i][j]+" </td>";
		}
		TableDisplay+="</tr>";
	}
	
	TableDisplay+="</table>";
	var Columns = ColHeaderofTable(vSel);
	makeFilterElements();
    ObjValue(colVal);
			
	div.innerHTML = TableDisplay;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});		
    });
}

//This function converts dataset to json and display it on the dashboard
	function dataexport_json(dataset)
	{
		var blob= new Blob([data],{ type:"text/ApplicationJson;charset:utf-8" });
		displayDataset = dataset;
		createTableUsingJSON();
	}

// The index value of Column header is determined by colVal
	
function ColHeaderofTable(colVal){
  var columnSet = {};
  var columns = [];
  columnSet.columns = columns;


  for(var i=0; i <colVal.length; i++)
  {
    var colVal = {
      "index": colVal[i],
        "title": colVal[i]
    }
    columnSet.columns.push(colVal);
  }

  return columnSet;
}

//Json value gets parsed into the table. 
function createTableUsingJSON() {
	var div = document.getElementById('table');
	tableStyleImpleentation(div);
	
	if(div)
	{
		div.innerHTML = "";
	}
	var TableDisplay = "<table id='dataTable' class='table table-striped table-bordered' cellspacing='0' width='100%'><thead><tr>";
	var data = JSON.parse(displayDataset);
	var headers = [];
	for (var key in data[0]) {
		alert(key);
		TableDisplay+= "<th>" +key+ "</th>";
		headers.push(key);
	}
	TableDisplay+= "</tr></thead>";
	TableDisplay+= "<tbody>";
	
	
	for (var i = 1; i < data.length; i++) {
		TableDisplay+= "<tr>";
		for(var j=0;j<headers.length;j++){
		TableDisplay+= "<td>" +data[i].headers[j]+" </td>";
		}
		TableDisplay+="</tr>"
	}
	
	TableDisplay+="</table>";
	var Columns = ColHeaderofTable(colData);
	makeFilterElements();
    makeObmakeObjectsjects(colData);
			

	
	div.innerHTML = TableDisplay;
	
			$('#dataTable').DataTable({
				"paging":   true,
				"ordering": true,
				"info":     false,
				"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
				
			});
}


//This function is used to create object of records in the loaded dataset 

function ObjValue(headerVal){
	if(LoadedDataVal == "cancer.csv"){
		makeCancerObjects(headerVal);
	} else if(LoadedDataVal == "DrugPoisioning.csv"){
		makeDrugPoisioningObjects(headerVal);
	} else if(LoadedDataVal == "HeartDisease.csv"){
		makeHeartDiseaseObjects(headerVal);
	} else if(LoadedDataVal == "InfantMortality.csv"){
		makeInfantMoratalityObjects(headerVal);
	} else if(LoadedDataVal == "IschemicStroke.csv"){
		makeIschemicStrokeObjects(headerVal);
	}
}

// Cancer dataset object is created in the form of array object
function makeCancerObjects(headerVal){
	debugger;
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let cancerObject = new Disease(record[headerVal[0]],record[headerVal[1]],record[headerVal[2]],record[headerVal[3]],record[headerVal[4]],record[headerVal[5]],record[headerVal[6]],record[headerVal[7]],record[headerVal[8]],record[headerVal[9]],record[headerVal[10]],record[headerVal[11]],record[headerVal[12]]);
		
		arrObj.push(cancerObject);
	}
}

// Ischemic Stroke dataset object is created in the form of array object
function makeIschemicStrokeObjects(headerVal){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let ischemicObject = new Disease(record[headerVal[0]],record[headerVal[1]],record[headerVal[2]],record[headerVal[3]],record[headerVal[4]],record[headerVal[5]],record[headerVal[6]],record[headerVal[7]],record[headerVal[8]],record[headerVal[9]],record[headerVal[10]],record[headerVal[11]],record[headerVal[12]]);
		
		arrObj.push(ischemicObject);
	}
}

//Heart Disease dataset object is created in the form of array object
function makeHeartDiseaseObjects(headerVal){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let heartObject = new Disease(record[headerVal[0]],record[headerVal[1]],record[headerVal[2]],record[headerVal[3]],record[headerVal[4]],record[headerVal[5]],record[headerVal[6]],record[headerVal[7]],record[headerVal[8]],record[headerVal[9]],record[headerVal[10]],record[headerVal[11]],record[headerVal[12]]);
		
		arrObj.push(heartObject);
	}
}

//Infant Mortality dataset object is created in the form of array object
function makeInfantMoratalityObjects(headerVal){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let infantObject = new Disease(record[headerVal[0]],record[headerVal[1]],record[headerVal[2]],record[headerVal[3]],record[headerVal[4]],record[headerVal[5]],record[headerVal[6]],record[headerVal[7]],record[headerVal[8]],record[headerVal[9]],record[headerVal[10]],record[headerVal[11]],record[headerVal[12]]);
		
		arrObj.push(infantObject);
	}
}

//Drug Poisioning dataset object is created in the form of array object

function makeDrugPoisioningObjects(headerVal){
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		var record = json[i];
		let drugObject = new Disease(record[headerVal[0]],record[headerVal[1]],record[headerVal[2]],record[headerVal[3]],record[headerVal[4]],record[headerVal[5]],record[headerVal[6]],record[headerVal[7]],record[headerVal[8]],record[headerVal[9]],record[headerVal[10]],record[headerVal[11]],record[headerVal[12]]);
		
		arrObj.push(drugObject);
	}
}

//This function is used to creates filter element
function makeFilterElements() {
	var filter = document.createElement('div');
	filter.id = 'select-colVal';
	var divContainer = document.getElementById("filter");
	filter.style.marginLeft = '40px';
    divContainer.innerHTML = "";
    divContainer.appendChild(filter);
	
	filterCreation();
}	

 //filter functionality is created using this function

function filterCreation() {
	var select_column_div = document.getElementById("select-colVal");	
	createHeader(select_column_div,"Please select the column that you want to filter");	
	var br = document.createElement('br');
	var filter = document.createElement('div');
	
	select_column_div.appendChild(br);
	var json = fetchParsedJson();	
	
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			checkBoxCreate(key,"select-colVal");
		}
		break;
	}
	
	FilterStyleImplementation(select_column_div);
	createFilterBttn(select_column_div);
}


//this function is used to create "Add Filter" functionality for filter
 
function createFilterBttn(select_column_div) {
	var addFilterButton= document.createElement('input');
	addFilterButton.setAttribute('type','button');
	addFilterButton.setAttribute('id', 'addFilter');
	addFilterButton.setAttribute('name','addFilterButton');
	addFilterButton.setAttribute('value','Add Filter');
	addFilterButton.style.marginLeft = '550px';
	addFilterButton.addEventListener('click', function(event){divAnimation()});
	addFilterButton.addEventListener('click',function(event){createRowFilter()});
	select_column_div.appendChild(document.createElement("br"));
	select_column_div.appendChild(addFilterButton);
}

 
function checkBoxCreate(columnName, parentDivId) {
	var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.name = columnName;
	checkbox.value = "0"; 
	checkbox.id = columnName;
	
	// Styles for Checkbox
	makeCheckBoxStyles(checkbox);
	
	var label = document.createElement('label')
	label.htmlFor = "id";
	label.appendChild(document.createTextNode(columnName));
	
	var divContainer = document.getElementById(parentDivId);
	if(divContainer){
		divContainer.appendChild(label);
		divContainer.appendChild(checkbox);
	}	
}

//this function is used to create the header value
function createHeader(divId,headerLabel) {
	var heading = document.createElement('div');
	heading.style.borderTop = '1px solid black';
	heading.style.fontWeight = 'bold';
	heading.style.paddingLeft = '440px';
	heading.style.fontSize = '16px';
	heading.style.color = 'blue';
	heading.style.paddingTop = '20px';
	heading.innerHTML=headerLabel;
	divId.appendChild(heading);
	//divId.appendChild(document.createElement('br'));
}

 //this function is used to Create Row Filters
function createRowFilter() {

	var divContainer = document.getElementById('categorical-filter-checkbox');
	divContainer.innerHTML = "";

	document.getElementById("filter-row").hidden=false;
	var checkedCategorisedColumnsSet = fetchCheckedCategorisedColumns();
	
	for (const value of checkedCategorisedColumnsSet) {		
		var selectDiv = document.createElement("div");
		selectDiv.style.marginTop = "14px";
		selectDiv.style.marginRight = "24px";
		
		var select = document.createElement("select");
		select.id = value;
		select.multiple = true;
		select.style.width = "180px";
		select.style.overflowX = "auto";		
		
		var selectLabel = document.createElement('label')
		selectLabel.htmlFor = "id";
		selectLabel.appendChild(document.createTextNode(value));
		
		var categoryValueSet = fetchValforCategory(value);
		for (const value of categoryValueSet) {
			var option = document.createElement("option");
			option.value = value;
			option.selected ="";
			option.innerHTML = value;
			select.add(option);
		}
		selectLabel.append(document.createElement("br"));
		selectLabel.append(select);
		selectDiv.appendChild(selectLabel);
		divContainer.append(selectDiv);				
	}
}

//this function is used to fetch All values for particular category

function fetchValforCategory(categoryVal) {
	let categoryValueSet = new Set();
	var json = fetchParsedJson();	
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			var columnName = key;
			var columnValue = json[i][key];
			if(categoryVal == columnName) {
				categoryValueSet.add(columnValue);
			}
		}
	}	
	return categoryValueSet;
}


function fetchAllCategorisedColumnSet() {
	let categorisedColumnsSet = new Set();
	var json = fetchParsedJson();
	for(var i = 0 ; i < json.length; i++){
		for (var key in json[i]) {
			var columnName = key;
			var columnValue = json[i][key];
			if((columnName != null && columnName != '')){
				categorisedColumnsSet.add(columnName);
			} else if(categorisedColumnsSet.size == json[i].length){
				return categorisedColumnsSet;
			}
		}	
	}		
	return categorisedColumnsSet;
}

 //this function is used to check if column value is Selected
function isColumnSelected(columnName) {
	var isColumnSelected = false;
	var select_column_div = document.getElementById('select-colVal');
	for(var i = 0 ; i < select_column_div.children.length; i++ ){
		var childDiv = select_column_div.children[i];
		if(childDiv.type == 'checkbox' && childDiv.id == columnName && childDiv.checked) {
			isColumnSelected = true
			break;
		}
	}
	return isColumnSelected;
}

//this function is used to fetch parsed json value of current dataset
 
function fetchParsedJson() {
	return JSON.parse(displayDataset);
}

 //this function is used to fetch all colVal names
function fetchAllColumns() {
	let columnSet = new Set();
	var json = fetchParsedJson();
	for (var key in json[0]) {
		columnSet.add(key);
	}
	return columnSet;
}

 //this function is used to fetch Checked Categorised colVal name
function fetchCheckedCategorisedColumns() {
	let checkedCategorisedColumnSet = new Set();
	var categorisedColumnsSet = fetchAllCategorisedColumnSet();
	for (const value of categorisedColumnsSet) {		
		if(isColumnSelected(value)){
			checkedCategorisedColumnSet.add(value);
		}
	}	
	return checkedCategorisedColumnSet;
}


//this function is used to fetch All Numerical Columns
function fetchAllNumericalColumns() {
	var numericalFilterColumnsSet = new Set();
	var allColumns = fetchAllColumns();
	var categorisedColumnsSet = fetchAllCategorisedColumnSet();
	for (const value of allColumns) {	
		if(!categorisedColumnsSet.has(value)){
			numericalFilterColumnsSet.add(value);
		}
	}
	return numericalFilterColumnsSet;
}


 function convertToCamelCase(string,seperator){
    var out = "";
	if(seperator != null){
    string.split(seperator).forEach(function (el, idx) {
        var add = el.toLowerCase();
        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
    });
	}else {
		return string;
	}	
    return out;
}

function fetchAllFilteredConditions() {
	let filteredItem = [];
	let selectedCatColumnValueMap = new Map();
	let selectedNumColumnValueMap = new Map();
	let numericalCheckBox = new Set();
	
	var filter = document.getElementById('categorical-filter-checkbox');
	for(var i = 0; i < filter.children.length ; i++){
		var childElement = filter.children[i].firstElementChild.childNodes;
		var columnName = convertToCamelCase(childElement[0].data,"_"); //label field
		var multiSelectDropDowns = childElement[2].options; // multi select dropdown field
		let selectedCatValueSet = new Set();
		for(var j = 0 ; j< multiSelectDropDowns.length; j++){
			if(multiSelectDropDowns[j].selected){
				selectedCatValueSet.add(multiSelectDropDowns[j].value);
			}
		}
		if(selectedCatValueSet.size > 0){
			selectedCatColumnValueMap.set(columnName,selectedCatValueSet);
		}	
	}
	filteredItem.push(selectedCatColumnValueMap); //push categorical value map to first element in array
	
	
	var numericalFilters = fetchAllNumericalColumns();
	for (const value of numericalFilters) {
		if(isColumnSelected(value)){
			numericalCheckBox.add(convertToCamelCase(value,"_"));
		}
	}
	if(numericalCheckBox.size > 0){
		selectedNumColumnValueMap.set('selectedNumericalValues',numericalCheckBox);
		selectedNumColumnValueMap.set('numericalFilterCondition',document.querySelector('input[name="numericalFilter"]:checked').value);
		selectedNumColumnValueMap.set('numericalFilterValue',document.getElementById('numericalFilter').value);
	}
	filteredItem.push(selectedNumColumnValueMap); //push numerical related values to second element in array;
	return filteredItem;
}

function resetSpace(){
	var bc = document.getElementById('barchartcanvas');
	var lc = document.getElementById('linechartcanvas');
	var dc = document.getElementById('doughnutchartcanvas');
	var pc = document.getElementById('piechartcanvas');
	if(bc != undefined){
		bc.remove();
	}
	if(lc != undefined){
		lc.remove();
	}
	if(dc != undefined){
		dc.remove();
	}
	if(pc != undefined){
		pc.remove();
	}
}

function makeCanvasElement(chartType){
	var canvas = document.createElement('canvas');
	canvas.id=chartType;
	canvas.class="chartCanvas";
	document.getElementById('childChart').appendChild(canvas);
}


function displayCharts() {
	resetSpace();
	var filteredConditiontionsMap = fetchAllFilteredConditions();
	var map = BeforeProcessFiltering(filteredConditiontionsMap);
	var chartsSelected = fetchChartSelections();
	var labels = [];
	var vals = [];
	for (let label of map.keys()){
		labels.push(label);
		vals.push(map.get(label));
	}
	
	for(var i =0;i<chartsSelected.length;i++){
		document.getElementById('parentChart').style.display = "block";
		let cs = new ChartMain();
		var chart = null;
		let isBackgroundColorRequired = true;
		if(chartsSelected[i] == "Bar Chart"){
			makeCanvasElement("barchartcanvas");

			let barChartDecorator = new BarChartDecorator();
			chart = cs.orderChart("bar");
			chart.setLabelAndData(labels,vals);
			barChartDecorator.applyBackgroundColor(chart);
			barChartDecorator.applyBorderColor(chart);
		} else if(chartsSelected[i] == "Line Chart"){
			let lineChartDecorator = new LineChartDecorator();
			makeCanvasElement("linechartcanvas");

			chart = cs.orderChart("line");
			chart.setLabelAndData(labels,vals);
			lineChartDecorator.applyBorderColor(chart);

		} else if(chartsSelected[i] == "Pie Chart"){
			let pieChartDecorator = new PieChartDecorator();
			makeCanvasElement("piechartcanvas");
			chart = cs.orderChart("pie");
			chart.setLabelAndData(labels,vals); 
			pieChartDecorator.applyBackgroundColor(chart);
			pieChartDecorator.applyBorderColor(chart);			
		}else if(chartsSelected[i] == "Doughnut Chart"){
			let doughnutChartDecorator = new DoughnutChartDecorator();
			makeCanvasElement("doughnutchartcanvas");
			chart = cs.orderChart("doughnut");
			chart.setLabelAndData(labels,vals); 
			doughnutChartDecorator.applyBackgroundColor(chart);
			doughnutChartDecorator.applyBorderColor(chart);
		}
		
		 
		chart.plot();
	}
}

function fetchChartSelections(){
	var chartsSelected = [];
	var select_column_div = document.getElementById('select-colVal');
	var parentEl = document.getElementById('plot-graph').children[0];
	for(var i = 0;i<parentEl.children.length;i++){
		var childEl = parentEl.children[i];
		if(childEl.type == 'checkbox' && childEl.checked){
			chartsSelected.push(childEl.value);
		}
	}
	return chartsSelected;
}
class Filter{
	constructor(){}
	filterRow(dataSet, columnName, columnValue, operand, isCategorical, isNumerical){
		let result;
		
		for(var i=0;i<colVal.length;i++){
			if(columnName === convertToCamelCase(colVal[i],"_")){
				columnName = i;
				break;
			}
		}
		
		if(isCategorical){
			result = vSel.filter(fil => fil[columnName] === columnValue );		
		}

		if(isNumerical){
			if(operand == '='){
				result = vSel.filter(fil => fil[columnName] === Number.parseInt(columnValue) );
			}
			else if(operand == '>='){
				result = vSel.filter(fil => fil[columnName] >= Number.parseInt(columnValue) );
			}
			else{
				result = vSel.filter(fil => fil[columnName] <= Number.parseInt(columnValue) );
			}
		}
		return result.length;
    }
}

function BeforeProcessFiltering(filterCondition)
{
	let isCategorical = 0;
	let isNumerical = 0;
	let columnName;
	let categoryValues;
	let columnValue;
	let operand;
	let colNames = [];
	let resultDataMap = new Map();
	for (let categoryKey of filterCondition[0].keys()){
		isCategorical = 1;
		isNumerical = 0;
		columnName = categoryKey;
		categoryValues = filterCondition[0].get(categoryKey);
		for(let columnVal of categoryValues){
			let count = filterVal(columnName, columnVal, isCategorical, isNumerical);
			resultDataMap.set(columnVal, count);
		}
	}

	for(let numericalKey of filterCondition[1].keys())
	{
		isNumerical = 1;
		isCategorical = 0;		
		if(numericalKey == "selectedNumericalValues"){
			let numericalVals = filterCondition[1].get(numericalKey);
			
			for(let val of numericalVals.keys())
			{
				colNames.push(val);
			}
		}
		else if(numericalKey == "numericalFilterCondition")
		{
			let operandName = filterCondition[1].get(numericalKey);
			if(operandName == "greaterThanEqualTo"){
				operand = ">=";
			}
			else if(operandName == "lessThanEqualTo"){
				operand = "<=";
			}
			else if(operandName == "equalTo"){
				operand = "=";
			}
		}
		else if(numericalKey == "numericalFilterValue"){
			columnValue = filterCondition[1].get(numericalKey);
		}
		
	}
	
	if(isNumerical){
		for(let colVal of colNames)
		{
			let count = filterVal(colVal,columnValue, isCategorical, isNumerical, operand);
			resultDataMap.set(colVal, count);
		}
	}
	return resultDataMap;
}

function filterVal(columnName,columnValue,isCategorical, isNumerical, operand)
{
	let filterVal = new Filter();
	let result = filterVal.filterRow(arrObj, columnName, columnValue, operand, isCategorical, isNumerical);
	return result;
}



function tableStyleImpleentation(div1) {
	div1.style.width = "150%";
	div1.style.paddingBottom = "50px";
}


function FilterStyleImplementation(col_div) {
	var br = document.createElement('br');
	col_div.style.fontFamily = "Century Gothic";
	col_div.style.fontWeight = "bold";
	col_div.appendChild(br);
}

function divAnimation() {
	var secondDivId = document.getElementById('filter-row');
	secondDivId.style.fontFamily = "Century Gothic";
	secondDivId.style.fontWeight = "bold";	
}


function makeCheckBoxStyles(chbk) {
	chbk.style.marginRight = "40px";
	chbk.style.marginLeft = "10px";
}
