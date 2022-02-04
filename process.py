log_file = open("um-server-01.txt") 
# opens the file 

def sales_reports(log_file):
    # beginning a function in the folder
    for line in log_file:
        # looping the file
        line = line.rstrip()
        # stripping the lines so they can be seperated
        day = line[0:3]
        # specifiying which column they want
        if day == "Mon":
            # Specifying what they want from  the column
            print(line)
            # telling the program what to display 


sales_reports(log_file)
# closing the function
