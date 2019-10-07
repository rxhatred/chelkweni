"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("../schema");
// - GET - /students # returns all students
exports.allStudents = function (req, res) {
    var students = schema_1.Student.find(function (err, students) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(students);
        }
    });
};
// - GET - /student/{1} # returns a student with id 1
exports.getStudent = function (req, res) {
    schema_1.Student.findById(req.params.id, function (err, student) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(student);
        }
    });
};
// - POST - /student # inserts a new student into the table
exports.addStudent = function (req, res) {
    var student = new schema_1.Student(req.body);
    student.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(student);
        }
    });
};
// - DELETE - /student/{1} # deletes a student with id of 1
exports.deleteStudent = function (req, res) {
    schema_1.Student.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Deleted!');
        }
    });
};
// - PUT - /student/{1} # updates a student with id of 1
exports.updateStudent = function (req, res) {
    schema_1.Student.findByIdAndUpdate(req.params.id, req.body, function (err, student) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Updated!');
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL3N0dWRlbnRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQW9DO0FBRXBDLDJDQUEyQztBQUNoQyxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2pELElBQUksUUFBUSxHQUFHLGdCQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLFFBQWE7UUFDbEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLHFEQUFxRDtBQUM1QyxRQUFBLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2hELGdCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLE9BQVk7UUFDbkQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFQSwyREFBMkQ7QUFDbEQsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGdCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1FBQ2xCLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUEsMkRBQTJEO0FBQ2xELFFBQUEsYUFBYSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbkQsZ0JBQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEdBQVE7UUFDL0MsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFQSx3REFBd0Q7QUFDN0MsUUFBQSxhQUFhLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNyRCxnQkFBTyxDQUFDLGlCQUFpQixDQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDYixHQUFHLENBQUMsSUFBSSxFQUNSLFVBQUMsR0FBUSxFQUFFLE9BQVk7UUFDckIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9