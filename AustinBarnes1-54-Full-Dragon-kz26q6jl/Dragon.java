public class Dragon {

private int dragLvl;
private String dragonAttack;

public Dragon(int theLvl, String theAttack){
  dragLvl = theLvl;
  dragonAttack = theAttack;
}
public String getAttack(){
  return dragonAttack;
}
public int getLevel(){
  return dragLvl;
}
public String fight(){
int count = 1;
String result = "";
  while(count <= dragLvl){
    result += dragonAttack;
    count++;
  }
  return result;
}
public String toString()
    {
        return "Dragon is at level " + dragLvl + " and attacks with " + dragonAttack;
    }
}