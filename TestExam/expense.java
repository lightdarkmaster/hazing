package TestExam;

public class expense {
    public static void main(String[] args){
        double salary = 10000;
        double deductions = 2700;
        double internet = 1499;
        double loan = 1500;
        double bike = 7589;


        double firstCutOffTotalExpenses = bike;
        System.out.println("First Cut Off");
        System.out.println("Total Expenses: " +"Php." +  firstCutOffTotalExpenses);
        System.out.println("Remaining Balance: " + "Php." + (salary - firstCutOffTotalExpenses));


        double totalExpenses = salary - deductions - internet - loan;
        System.out.println("Second Cut Off");
        System.out.println("Total Expenses: " +"Php." +  totalExpenses);
        System.out.println("Remaining Balance: " + "Php." + (salary - totalExpenses));
    }

}
