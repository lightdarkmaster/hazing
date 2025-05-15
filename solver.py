import datetime


totalHoursNeeded = 486;

print("OJT Hour Solver");
print("Assuming that you will render 8 hours per day and no absence starting today. ");
hoursRendered = int(input(f"Enter Rendered Hours: "))
remainingHours = totalHoursNeeded - hoursRendered;
print("Remaining Hours: " + str(remainingHours) + " Hours");

endDate = datetime.date.today() + datetime.timedelta(days=round(remainingHours / 8))
print("End Date: " + endDate.strftime("%B %d, %Y"))
