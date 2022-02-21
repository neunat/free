/**
 * This is a class that tests the Card class.
 */
public class Main {

	/**
	 * The main method in this class checks the Card operations for consistency.
	 *	@param args is not used.
	 */
	public static void main(String[] args) {
    Card c1 = new Card("Jack", "Clubs", 10);
    System.out.println(c1);
    Card c2 = new Card("Jack", "Clubs", 10);
    System.out.println(c1.matches(c2));
    Card c3 = new Card("Ace", "Diamonds", 15);
    System.out.println(c3);

    String[] ranks = {"ABC", "DEF", "GHI"};
    String[] suits = {"Lions", "Tigers", "Bears"};
    int[] values = {1,2,3};
    Deck theDeck = new Deck(ranks, suits, values);
    System.out.println(theDeck);
	}
}
