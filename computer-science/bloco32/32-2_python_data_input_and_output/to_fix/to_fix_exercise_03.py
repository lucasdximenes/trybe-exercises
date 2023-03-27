approved_students = []
repproved_students = []

with open("./exercise_03.txt", "r") as file:
    for student in file.readlines():
        actual_student = student.split(" ")
        if int(actual_student[1]) >= 6:
            approved_students.append(student)
        else:
            repproved_students.append(student)

with open("./exercise_03_part_2.txt", "w") as file:
    file.writelines(approved_students)

with open("./exercise_03_part_3.txt", "w") as file:
    file.writelines(repproved_students)
