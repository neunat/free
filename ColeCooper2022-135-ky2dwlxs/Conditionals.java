class Conditionals{
  public static void season(int month, int day){
    if ((day >31 || day<1) || (month<1||month>12)){
      System.out.println("invalid date"+month+":"+day); // look a compound condtional simple > me spending foever coding conditionals
    }
    else{
     switch(month){
       case 1:
        System.out.println("Winter");
       case 2:
        System.out.println("Winter");
       case 3:
        if (day>=21){
          System.out.println("Winter");
        }
        else{
          System.out.println("Winter");
        }
       case 4:
          System.out.println("Spring");
       case 5:
        System.out.println("Spring");
       case 6:
        if (day>=21){
          System.out.println("Summer");
        }
        else{
          System.out.println("Spring");
        }
       case 7:
        System.out.println("Summer");

       case 8:
        System.out.println("Summer");
       case 9:
        if (day>=23){
          System.out.println("Fall");
        }
        else{
          System.out.println("Summer");
        }
       case 10:
       System.out.println("Fall");
       case 11:
       System.out.println("Fall");
       case 12:
        if (day>=21){
          System.out.println("Winter");
        }
        else{
          System.out.println("Fall");
        }
     }
     

    }
  }
  public static void zodiac(int month, int day){
     if ((day >31 || day<1) || (month<1||month>12)){// look a compound condional mr stoll
     
      System.out.println("invalid date"+month+":"+day);
    }
    else {
    switch(month){
    case 1:
    if (day>=20){
      System.out.println("Aquarius");
    }
    else{
      System.out.println("Capricorn");
    }
    case 2:
    if (day>=18){
      System.out.println("Pisces");
    }
    else{
      System.out.println("Aquarius");
    }
    case 3:
    if (day>=20){
      System.out.println("Aries");
    }
    else{
      System.out.println("Pisces");
    }
    case 4:
    if (day>=20){
      System.out.println("Taurus");
    }
    else{
      System.out.println("Aries");
    }
    case 5:
    if (day>=21){
      System.out.println("Gemini");
    }
    else{
      System.out.println("Taurus");
    }
    case 6:
    if (day>=21){
      System.out.println("Cancer");
    }
    else{
      System.out.println("Gemini");
    }
    case 7:
    if (day>=21){
      System.out.println("Leo");
    }
    else{
      System.out.println("Cancer");
    }
    case 8:
    if (day>=21){
      System.out.println("Virgo");
    }
    else{
      System.out.println("Leo");
    }
    case 9:
    if (day>=21){
      System.out.println("Libra");
    }
    else{
      System.out.println("Virgo");
    }
    case 10:
    if (day>=21){
      System.out.println("Scorpio");
    }
    else{
      System.out.println("Libra");
    }
    case 11:
    if (day>=21){
      System.out.println("Saggitarius");
    }
    else{
      System.out.println("Scopio");
    }
    case 12:
    if (day>=21){
      System.out.println("Capricorn");
    }
    else{
      System.out.println("Saggitarius");
    }
    
  }
    }
}
}