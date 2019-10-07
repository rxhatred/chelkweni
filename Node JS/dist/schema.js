"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://127.0.0.1:27017/enrollment';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Connected....');
    }
});
exports.StudentSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true },
    emailAdd: { type: String, required: true }
});
exports.SubjectSchema = new mongoose_1.default.Schema({
    subjectCode: { type: String, required: true },
    subjectDescription: { type: String, required: true },
    room: { type: String, required: true },
    units: { type: Number, required: true }
});
var Student = mongoose_1.default.model('Student', exports.StudentSchema);
exports.Student = Student;
var Subject = mongoose_1.default.model('Subject', exports.SubjectSchema);
exports.Subject = Subject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQWdDO0FBRWhDLElBQU0sR0FBRyxHQUFXLHNDQUFzQyxDQUFDO0FBRTNELGtCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDM0IsSUFBSSxHQUFHLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QjtTQUNJO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNoQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsSUFBSSxrQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUM3QyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQzdDLENBQUMsQ0FBQztBQUVVLFFBQUEsYUFBYSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDN0MsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3BELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN0QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDMUMsQ0FBQyxDQUFDO0FBR0gsSUFBTSxPQUFPLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHFCQUFhLENBQUMsQ0FBQztBQUVoRCwwQkFBTztBQURoQixJQUFNLE9BQU8sR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUscUJBQWEsQ0FBQyxDQUFDO0FBQ3hDLDBCQUFPIn0=