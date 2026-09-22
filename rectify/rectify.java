package rectify;

public class rectify {
    public static void main(String[] args){
        new rectify(1, 5);
        new rectify(1, 5).getIndexOfChar("Hello, World!", 'o');
    }
    private rectify(int num1, int num2){
        if(num1 > num2){
            System.out.println("The first number is greater than the second number.");
        } else if(num1 < num2){
            System.out.println("The first number is less than the second number.");
        } else {
            System.out.println("Both numbers are equal.");
        }
    }

    public void evenORodd(int num){
        if(num % 2 == 0){
            System.out.println("The number is even.");
        } else {
            System.out.println("The number is odd.");
        }
    }
    public void getIndexOfChar(String str, char ch){
        int index = str.indexOf(ch);
        if(index != -1){
            System.out.println("The index of the character '" + ch + "' in the string is: " + index);
        } else {
            System.out.println("The character '" + ch + "' is not found in the string.");
        }
    }
}
