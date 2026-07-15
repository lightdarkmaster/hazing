import java.util.Scanner;

public class calculator {
    
    public static void main(String[] args){

        Scanner input = new Scanner(System.in);

        double num1, num2, sum, difference, product, quotient;

        System.out.print("Enter First Number: ");
        num1 = input.nextDouble();

        System.out.print("Enter Second Number: ");
        num2 = input.nextDouble();

        sum = num1 + num2;
        difference = num1 - num2;
        product = num1 * num2;
        quotient = num1 / num2;

        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
    }
}
