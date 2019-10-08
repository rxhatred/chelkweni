import mongoose, { mongo } from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/enrollment';

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Connected....');
    }
});

export const StudentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    emailAdd: { type: String, required: true }
});

export const SubjectSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    subjectDescription: { type: String, required: true },
    room: { type: String, required: true },
    units: { type: Number, required: true }
});

export const EnrollmentSchema = new mongoose.Schema({
    student : StudentSchema,
    subjects : [ SubjectSchema ]
})


const Student = mongoose.model('Student', StudentSchema);
const Subject = mongoose.model('Subject', SubjectSchema);
const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);
export { Student,Subject, Enrollment };

