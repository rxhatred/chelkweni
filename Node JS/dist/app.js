"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var studentController = __importStar(require("./controller/studentController"));
var subjectController = __importStar(require("./controller/subjectController"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
app.use(cors_1.default({ credentials: true, origin: true }));
app.use(body_parser_1.default.json());
//Student
app.get('/student', studentController.allStudents);
app.get('/student/:id', studentController.getStudent);
app.post('/student', studentController.addStudent);
app.delete('/student/:id', studentController.deleteStudent);
app.put('/student/:id', studentController.updateStudent);
//Subject
app.get('/subject', subjectController.allSubjects);
app.get('/subject/:id', subjectController.getSubject);
app.post('/subject', subjectController.addSubj);
app.delete('/subject/:id', subjectController.deleteSubject);
app.put('/subject/:id', subjectController.updateSubject);
//enrollment
//app.get('/');
//app.post('/');
app.set("port", process.env.PORT || 3000);
var PORT = app.get('port');
app.listen(PORT, function () {
    console.log("Successfully running at port " + PORT);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFxRDtBQUNyRCxnRkFBbUU7QUFDbkUsZ0ZBQW1FO0FBQ25FLDREQUFxQztBQUNyQyw4Q0FBd0I7QUFHeEIsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBRXRCLElBQUksV0FBVyxHQUFHO0lBQ2QsTUFBTSxFQUFFLHVCQUF1QjtJQUMvQixvQkFBb0IsRUFBRSxHQUFHO0NBQzVCLENBQUM7QUFHRixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixTQUFTO0FBQ1QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHekQsU0FBUztBQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXpELFlBQVk7QUFDWixlQUFlO0FBQ2YsZ0JBQWdCO0FBR2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBRzFDLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFnQyxJQUFNLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMsQ0FBQyJ9