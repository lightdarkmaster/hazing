/**
 * This program is an OJT Hour Solver that calculates the remaining hours needed
 * to reach the target total hours based on the rendered hours input by the user.
 *
 * @author Christian Barbosa
 */
import java.util.Scanner;

class solver {
    public static void main(String[] args) {
        System.out.println("OJT Hour Solver");

        Scanner input = new Scanner(System.in);

        // The total hours needed to reach the target
        int totalHoursNeeded = 486;

        // The expected end date in days
        double endDate = 78;

        System.out.print("Enter Rendered Hours: ");
        int renderedHours = input.nextInt();

        // Calculate the remaining hours
        int remainingHours = totalHoursNeeded - renderedHours;
        System.out.println("Remaining Hours: " + remainingHours);

        input.close();
    }
}

