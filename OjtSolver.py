import tkinter as tk
from tkinter import messagebox, font as tkfont
from tkinter.ttk import Separator
import datetime

class OJTHourSolver:
    def __init__(self, root):
        self.root = root;
        self.root.title("OJT Hour Solver");
        self.root.geometry("500x500");
        self.initUI();

    def initUI(self):
        self.frm = tk.Frame(self.root, bg="white");
        self.frm.pack(fill="both", expand=True);

        self.titleFont = tkfont.Font(family="Helvetica", size=24, weight="bold");
        self.normalFont = tkfont.Font(family="Helvetica", size=18);

        tk.Label(self.frm, text="OJT Hour Solver", font=self.titleFont, bg="white").pack(pady=20);

        tk.Label(self.frm, text="Enter Rendered Hours: ", font=self.normalFont, bg="white").pack();
        self.hoursRenderedEntry = tk.Entry(self.frm, font=self.normalFont, width=20);
        self.hoursRenderedEntry.pack(pady=10);

        tk.Button(self.frm, text="Calculate", command=self.solve, font=self.normalFont).pack(pady=10);

        Separator(self.frm, orient="horizontal").pack(fill="x", pady=20);

    def solve(self):
        try:
            hoursRendered = int(self.hoursRenderedEntry.get());
            remainingHours = 486 - hoursRendered;
            remainingDays = round(remainingHours / 8);
            endDate = datetime.date.today() + datetime.timedelta(days=round(remainingHours / 8));
            messagebox.showinfo("Result", f"Remaining Hours: {remainingHours} Hours\nRemaining Days: {remainingDays} Days\nEnd Date: {endDate.strftime('%B %d, %Y')}");

        except ValueError:
            messagebox.showerror("Error", "Invalid input. Please enter a number.");
            
            


if __name__ == "__main__":
    root = tk.Tk();
    app = OJTHourSolver(root);
    root.mainloop();

