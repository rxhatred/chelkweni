"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = require("../schema");
// - GET - /subj # returns all subjs
exports.allSubjects = function (req, res) {
    var subjects = schema_1.Subject.find(function (err, subjects) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(subjects);
        }
    });
};
// - GET - /subj/{1} # returns a subj with id 1
exports.getSubject = function (req, res) {
    schema_1.Subject.findById(req.params.id, function (err, subject) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(subject);
        }
    });
};
// - POST - /subj # inserts a new subj into the table
exports.addSubj = function (req, res) {
    var subject = new schema_1.Subject(req.body);
    subject.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(subject);
        }
    });
};
// - DELETE - /subj /{1} # deletes a subj with id of 1
exports.deleteSubject = function (req, res) {
    schema_1.Subject.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Deleted!');
        }
    });
};
// - PUT - /subj/{1} # updates a subj with id of 1
exports.updateSubject = function (req, res) {
    schema_1.Subject.findByIdAndUpdate(req.params.id, req.body, function (err, subject) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Updated!');
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViamVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL3N1YmplY3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQW9DO0FBR3BDLG9DQUFvQztBQUN6QixRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2pELElBQUksUUFBUSxHQUFHLGdCQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTyxFQUFFLFFBQWE7UUFDbkQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2hCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRiwrQ0FBK0M7QUFDcEMsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQVEsRUFBRSxPQUFZO1FBQ25ELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYscURBQXFEO0FBQzFDLFFBQUEsT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxnQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNsQixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVBLHNEQUFzRDtBQUM3QyxRQUFBLGFBQWEsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ25ELGdCQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBQyxHQUFRO1FBQy9DLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUQsa0RBQWtEO0FBQ3hDLFFBQUEsYUFBYSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbkQsZ0JBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBUSxFQUFFLE9BQVk7UUFDdEUsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==