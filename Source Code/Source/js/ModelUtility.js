class Disease{
	constructor(Year,LocationAbbr,LocationDesc,GeographicLevel,DataSource,Class,Topic,Data_Value,Data_Value_Unit,TopicID,LocationID,zip_code,latitude){
		this.Year = Year;
		this.LocationAbbr = LocationAbbr;
		this.LocationDesc = LocationDesc;
		this.GeographicLevel = GeographicLevel;
		this.DataSource = DataSource;
		this.Class = Class;
		this.Topic = Topic;
		this.Data_Value = Data_Value;
		this.Data_Value_Unit = Data_Value_Unit;
		this.TopicID = TopicID;
		this.LocationID = LocationID;
		this.zip_code = zip_code;
		this.latitude = latitude;
	}
}


class DrugPoisioning
{
	constructor(Year,Sex,Age,Race_and_Hispanic_Origin,State,zip_code,latitude,longitude,Deaths,Population,Crude_Death_Rate,Standard_Error_for_Crude_Rate,Low_Confidence_Limit_for_Crude_Rate,Upper_Confidence_Limit_for_Crude_Rate,Age_adjusted_Rate,Standard_Error_Age_adjusted_Rate,Lower_Confidence_Limit_for_Age_adjusted_rate,Upper_Confidence_Limit_for_Age_adjusted_Rate,State_Crude_Rate_in_Range,US_Crude_Rate,US_Age_adjusted_Rate)

	{
		
		this.Year										  =Year;
		this.Sex                                          =Sex;
		this.Age                                          =Age;
		this.Race_and_Hispanic_Origin                     =Race_and_Hispanic_Origin;
		this.State                                        =State;
		this.zip_code                                     =zip_code;
		this.latitude                                     =latitude;
		this.longitude                                    =longitude;
		this.Deaths                                       =Deaths;
		this.Population                                   =Population;
		this.Crude_Death_Rate                             =Crude_Death_Rate;
		this.Standard_Error_for_Crude_Rate                =Standard_Error_for_Crude_Rate;
		this.Low_Confidence_Limit_for_Crude_Rate          =Low_Confidence_Limit_for_Crude_Rate;
		this.Upper_Confidence_Limit_for_Crude_Rate        =Upper_Confidence_Limit_for_Crude_Rate;
		this.Age_adjusted_Rate                            =Age-adjusted_Rate;
		this.Standard_Error_Age_adjusted_Rate             =Standard_Error_Age-adjusted_Rate;
		this.Lower_Confidence_Limit_for_Age_adjusted_rate =Lower_Confidence_Limit_for_Age-adjusted_rate;
		this.Upper_Confidence_Limit_for_Age_adjusted_Rate =Upper_Confidence_Limit_for_Age-adjusted_Rate;
		this.State_Crude_Rate_in_Range                    =State_Crude_Rate_in_Range;
		this.US_Crude_Rate                                =US_Crude_Rate;
		this.US_Age_adjusted_Rate                         =US_Age-adjusted_Rate

	}
}

class InfantMortality
{	constructor(LGHC_Indicator_Name,Geography,zip_code,latitude,longitude,Year,Strata,Strata_Name,Numerator_Infants_deaths__under_age_1_year,Denominator_Live_births_occuring,Rate,Lower_95_percentage_CI,Upper_95_percentage_CI,LGHC_Indicator_ID,LGHC_Target_Rate)
	{
	this.LGHC_Indicator_Name						=LGHC_Indicator_Name;
    this.Geography                                  =Geography;
    this.zip_code                                   =zip_code;
    this.latitude                                   =latitude;
    this.longitude                                  =longitude;
    this.Year                                       =Year;
    this.Strata                                     =Strata;
    this.Strata_Name                                =Strata_Name;
    this.Numerator_Infants_deaths__under_age_1_year =Numerator_Infants_deaths__under_age_1_year;
    this.Denominator_Live_births_occuring           =Denominator_Live_births_occuring;
    this.Rate                                       =Rate;
    this.Lower_95_percentage_CI                     =Lower_95_percentage_CI;
    this.Upper_95_percentage_CI                     =Upper_95_percentage_CI;
    this.LGHC_Indicator_ID                          =LGHC_Indicator_ID;
    this.LGHC_Target_Rate                           =LGHC_Target_Rate;
	}
}

class IschemicStroke
{
	constructor(Year,County,zip_code,latitude,longitude,Hospital,OSHPDID,Measure,Risk_Adjusted_Rate,No_of_Deaths_or_Readmissions,No_of_Cases,Hospital_Ratings)
	{
		this.Year				=	Year;
		this.County				=	County;
		this.zip_code			=   zip_code;
		this.latitude			=	latitude;
		this.longitude			=   longitude;
		this.Hospital			=   Hospital;
		this.OSHPDID			=	OSHPDID;
		this.Measure			=	Measure
		this.Risk_Adjusted_Rate	=	Risk_Adjusted_Rate
		this.No_of_Deaths_or_Readmissions = No_of_Deaths_or_Readmissions;
		this.No_of_Cases		=	No_of_Cases;
		this.Hospital_Ratings	=	Hospital_Ratings;
	}
}

class Cancer
{
	constructor(Age_Adjusted_CI_Lower,Age_Adjusted_CI_Upper,Age_Adjusted_Rate,Area,zip_code,latitude,longitude,Count,Crude_CI_Lower,Crude_CI_Upper,Crude_Rate,Event_Type,Population,Race,Sex,Year)
	{
		this.Age_Adjusted_CI_Lower =Age_Adjusted_CI_Lower;
		this.Age_Adjusted_CI_Upper =Age_Adjusted_CI_Upper;
		this.Age_Adjusted_Rate=Age_Adjusted_Rate;
		this.Area=Area;
		this.zip_code=zip_code;
		this.latitude=latitude;
		this.longitude=longitude;
		this.Count=Count;
		this.Crude_CI_Lower=Crude_CI_Lower;
		this.Crude_CI_Upper=Crude_CI_Upper;
		this.Crude_Rate=Crude_Rate;
		this.Event_Type=Event_Type;
		this.Population=Population;
		this.Race=Race;
		this.Sex=Sex;
		this.Year=Year;
		
	}
}