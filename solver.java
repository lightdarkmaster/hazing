import java.util.Scanner;

class solver {
    public static void main(String[] args) {
        System.out.println("OJT Hour Solver");

        Scanner input = new Scanner(System.in);

        int totalHoursNeeded = 486;
        double endDate = 78;

        System.out.print("Enter Rendered Hours: ");
        int renderedHours = input.nextInt();

        int remainingHours = totalHoursNeeded - renderedHours;
        System.out.println("Remaining Hours: " + remainingHours);


        input.close();
    }
}
