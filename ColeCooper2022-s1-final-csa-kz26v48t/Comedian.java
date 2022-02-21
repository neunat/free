class Comedian{
  String name = "";
  int skillLevel =0;
  public Comedian(String name,int skillLevel){
    if (skillLevel <1){
      this.skillLevel = 1;
    }
    else if (skillLevel>10){
      this.skillLevel = 10;
    }
    else{
      this.skillLevel = skillLevel;
    }
    
    this.name = name;
    System.out.println("There was a kinda funny man named "+this.name+" His Skill Level was: "+this.skillLevel);
  }
  public String tellJoke(String deliverytext,String punchline){
    return (name+" tells a joke: "+deliverytext+"\n"+punchline);
  }
}