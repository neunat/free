class Hurricane{


  public static String category(int windSpeed){
    if (windSpeed <74){
      return ("Wind Speed "+windSpeed+" is a not a  Hurricane");
    }
    else if (windSpeed <96){
      return ("Wind Speed "+windSpeed+" is a Category 1 Hurricane");
    }
    else if (windSpeed <110){
      return ("Wind Speed "+windSpeed+" is a Category 2 Hurricane");
    }
    else if (windSpeed <130){
      return ("Wind Speed "+windSpeed+" is a Category 3 Hurricane");
    }
    else if(windSpeed <155){
      return ("Wind Speed "+windSpeed+" is a Category 4 Hurricane");
    }
    else if (windSpeed <255) {
      return ("Wind Speed "+windSpeed+" is a Category 5 Hurricane");
    }
    else {
      return ("Wind Speed "+windSpeed+" is a new record for a Category 5 Hurricane");
    }
  }
}