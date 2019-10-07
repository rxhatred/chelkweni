import { Request, Response } from 'express';
import { Subject } from '../schema';


// - GET - /subj # returns all subjs
export let allSubjects = (req: Request, res: Response) => {
    let subjects = Subject.find((err:any, subjects: any) => {
    if (err) {
        res.send(err)
    } else {
        res.send(subjects);
    }
});
};

// - GET - /subj/{1} # returns a subj with id 1
export let getSubject = (req: Request, res: Response) => {
    Subject.findById(req.params.id, (err: any, subject: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(subject);
        }
    });
};

// - POST - /subj # inserts a new subj into the table
export let addSubj = (req: Request, res: Response) => {
    let subject = new Subject(req.body);
    subject.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(subject);
        }
    });
};

  // - DELETE - /subj /{1} # deletes a subj with id of 1
export let deleteSubject = (req: Request, res: Response) => {
    Subject.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Deleted!');
        }
    });
};

 // - PUT - /subj/{1} # updates a subj with id of 1
export let updateSubject = (req: Request, res: Response) => {
    Subject.findByIdAndUpdate(req.params.id, req.body, (err: any, subject: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send('Updated!');
        }
    });
};
