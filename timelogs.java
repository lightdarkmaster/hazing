public class timelogs {
    public static double targetLogsPerDay = 7.5;
    public static double currentLogs = 4.6333;
    public static double remainingLogs = targetLogsPerDay - currentLogs;

    public static void main(String[] args) {
        System.out.println("Target Logs Per Day: " + timelogs.targetLogsPerDay);
        System.out.println("Current Logs: " + timelogs.currentLogs);
        System.out.println("Remaining Logs: " + timelogs.remainingLogs);

        timelogs();
    }




    public static void timelogs(){
        if(remainingLogs > 0){
            System.out.println("You have " + remainingLogs + " logs remaining.");
        } else {
            System.out.println("You have " + remainingLogs + " logs remaining.");
        }
    }
    

    public void createStatus(){
        System.out.println("Target Logs Per Day: " + timelogs.targetLogsPerDay);
        System.out.println("Current Logs: " + timelogs.currentLogs);
        System.out.println("Remaining Logs: " + timelogs.remainingLogs);
    }

}
