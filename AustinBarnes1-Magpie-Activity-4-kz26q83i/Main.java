
import java.util.Scanner;
public class Main
{
	public static void main(String[] args)
	{
		Magpie magpie = new Magpie();
		System.out.println("M > " + magpie.greeting());
		Scanner scanner = new Scanner(System.in);
		String statement = scanner.nextLine();
		
		while (!statement.equals("Bye"))
		{
			System.out.println("M > " + magpie.getResponse(statement));
			statement = scanner.nextLine();
		}
		scanner.close();
	}

}

