
import { worksheetSchema, worksheetUpdateSchema } from "../validations/worksheet.validations";
import ValidationsHolder from "../validations/validationHolder";
import BaseController from "./base.controller";
import { NextFunction, Request, Response } from "express";
import { badRequest, internal, notFound, unauthorized } from "boom";
import { speeches } from "../configs/speeches.config";
import path from "path";
import fs from 'fs';
import db from "../utils/dbconnection.util"
import dispatcher from "../utils/dispatch.util";
import { user_topic_progress } from "../models/user_topic_progress.model";
import { course_topic } from "../models/course_topic.model";
import { constents } from "../configs/constents.config";
import { Op } from "sequelize";
import { worksheet_response } from "../models/worksheet_response.model";
export default class MentorAttachmentController extends BaseController {

    model = "mentor_attachment";

    protected initializePath(): void {
        this.path = '/mentorAttachments';
    }
    protected initializeValidations(): void {
        this.validations =  new ValidationsHolder(worksheetSchema,worksheetUpdateSchema);
    }
    protected initializeRoutes(): void {
        //example route to add 
        // this.router.post(this.path+"/:id/response", this.submitResponse.bind(this));

        super.initializeRoutes();
    }
} 
