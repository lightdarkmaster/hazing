import java.util.Scanner;

class solver {
    public static void main(String[] args) {
        System.out.println("OJT Hour Solver");

        // The total hours needed to reach the target
        try (Scanner input = new Scanner(System.in)) {
            // The total hours needed to reach the target
            int totalHoursNeeded = 486;
            
            System.out.print("Enter Rendered Hours: ");
            int renderedHours = input.nextInt();
            
            // Calculate the remaining hours
            int remainingHours = totalHoursNeeded - renderedHours;
            System.out.println("Remaining Hours: " + remainingHours);
        }
    }
}

