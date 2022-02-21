#include <iostream>
#include <cstdlib>

using namespace std;

string subject(int key)
{
    switch(key)
	{
		case 0:
			return "Bill Nye";
			break;
			
    	case 1:
			return "A Dog's Dog";
     		break;
     
    	case 2:
			return "Superman with laser eyesight";
    		break;
      
    	case 3:
			return "My second step-cousin thrice removed in-law on my father's side";
    		break;
     
     	case 4:
			return "Some chicken nuggets at the KFC";
     		break;
     
     	case 5:
			return "An Ak-47";
     		break;

     	case 6:
			return "My English teacher's house";
     		break;
     
     	case 7:
			return "A c++ file";
     		break;
     
     	case 8:
			return "A trackpad";
     		break;
     
     	case 9:
			return "A door handle";
     		break;

	    case 10:
			return "A Balisong";
     		break;	
        case 11: 
            return "A banana";
            break;

     	default:
			return "A random guy";
     	break; 
	}
}

string verb(int key)
{
    switch(key)
	{
		case 0:
			return "ejected";
			break;

    	case 1:
			return "ran over";
     		break;
     
    	case 2:
			return "broke";
    		break;
      
    	case 3:
			return "destroyed";
    		break;
     
     	case 4:
			return "crawled under";
     		break;
     
     	case 5:
			return "sat on";
     		break;

     	case 6:
			return "burned";
     		break;
     
     	case 7:
			return "shredded";
     		break;
     
     	case 8:
			return "ate";
     		break;
     
     	case 9:
			return "farted on";
     		break;

	    case 10:
			return "burped on";
     		break;

        case 11:
            return "punched";
            break;     

     	default:
			return "passed away on";
     		break; 
	}
}

string object(int key)
{
    switch(key)
	{
        case 0:
			return "my friend.";
			break;
			
    	case 1:
			return "some money.";
     		break;
     
    	case 2:
			return "my mom's favorite vase.";
    		break;
      
    	case 3:
			return "the toilet at my Spanish teacher's house.";
    		break;
     
     	case 4:
			return "my Fortnite account.";
     		break;
     
     	case 5:
			return "my best friend's camera.";
     		break;

     	case 6:
			return "the back part of the toilet.";
     		break;
     
     	case 7:
			return "a peice of poop.";
     		break;
     
     	case 8:
			return "some random cockroach who tried to sell me real estate.";
     		break;
     
     	case 9:
			return "my homework.";
     		break;

	    case 10:
			return "the run button of replit.";
     		break;	
        case 11:
            return "my car";
			break; 
			
        default:
			return "my friend Bob.";
     		break; 
	}
}

int main(int argc, const char* argv[]) 
{
   	srand(time(0));
   	int rand_sub = rand() % 12;
	int rand_verb = rand() % 12;
	int rand_obj = rand() % 12;
    printf("\033[0;36m");
	cout << subject(rand_sub) << " " << verb(rand_verb) << " " << object(rand_obj) << endl;
	return 0;
}