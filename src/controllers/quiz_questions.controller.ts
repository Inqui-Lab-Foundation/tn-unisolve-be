import { expression } from "joi";
import { faqSchema,faqSchemaUpdateSchema } from "../validations/faq.validation";
import { quizQuestionSchema, quizQuestionSchemaUpdateSchema } from "../validations/quizQuestions.validations";
import ValidationsHolder from "../validations/validationHolder";
import BaseController from "./base.controller";
import {Request,Response,NextFunction} from "express";
import path from "path";
import fs from "fs";
import dispatcher from "../utils/dispatch.util";
import { speeches } from "../configs/speeches.config";
import { badRequest } from "boom";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


export default class QuizQuestionsController extends BaseController {

    model = "quiz_question";

    protected initializePath(): void {
        this.path = '/quizQuestions';
    }
    protected initializeValidations(): void {
        this.validations =  new ValidationsHolder(quizQuestionSchema,quizQuestionSchemaUpdateSchema);
    }
    protected initializeRoutes(): void {
        //example route to add 
        //this.router.get(`${this.path}/`, this.getData);
        super.initializeRoutes();
    }

    protected async createData(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const {quiz_id,question_no,level} = req.body;
        const filenamePrefix = `quiz_${quiz_id}_q${question_no}_${level}`;
        await this.copyAllFiles(req,filenamePrefix,"images","quiz_imgs");
        return super.createData(req,res,next)
    }
}