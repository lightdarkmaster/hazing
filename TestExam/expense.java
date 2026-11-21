public class expense {
    public static void main(String[] args) {
        double salary = 10000;
        double deductions = 2700;
        double internet = 1499;
        double loan = 1500;
        double bike = 7589;

        double firstCutOffTotalExpenses = bike;
        System.out.println("First Cut Off");
        System.out.println("Total Expenses: " + "Php." + firstCutOffTotalExpenses);
        System.out.println("Remaining Balance: " + "Php." + (salary - firstCutOffTotalExpenses));

        System.out.println("---------------------------------------------------");
        double totalExpenses = salary - deductions - internet - loan;
        System.out.println("Second Cut Off");
        System.out.println("Total Expenses: " + "Php." + totalExpenses);
        System.out.println("Remaining Balance: " + "Php." + (salary - totalExpenses));


        
        System.out.println("---------------------------------------------------");
        computeAverage(new int[]{23,45,2,4,87,45,23,567,54,243,56});

    }

    public static void computeAverage(int[] numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        double average = (double) sum / numbers.length;
        System.out.println("Average: " + String.format("%.3f", average));

    }

}
