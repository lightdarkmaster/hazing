import datetime


totalHoursNeeded = 486;

print("OJT Hour Solver");
print("Note: Assuming that you will render 8 hours per day and \n no absence starting today. ");
hoursRendered = int(input(f"Enter Rendered Hours: "));
remainingHours = totalHoursNeeded - hoursRendered;
print("Remaining Hours: " + str(remainingHours) + " Hours");
remainingDays = round(remainingHours / 8);
print("Remaining Days: " + str(remainingDays) + " Days");

endDate = datetime.date.today() + datetime.timedelta(days=round(remainingHours / 8));
print("End Date: " + endDate.strftime("%B %d, %Y"));
