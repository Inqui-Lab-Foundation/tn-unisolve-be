import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { constents } from "../configs/constents.config";
import { speeches } from "../configs/speeches.config";
import { faq } from "../models/faq.model";
import dispatcher from "../utils/dispatch.util";
import { faqCategorySchema, faqCategorySchemaUpdateSchema } from "../validations/faq_category.validations";
import ValidationsHolder from "../validations/validationHolder";
import BaseController from "./base.controller";
import db from "../utils/dbconnection.util"

export default class FaqCategoryController extends BaseController {

    model = "faq_category";

    protected initializePath(): void {
        this.path = '/faqCategories';
    }
    protected initializeValidations(): void {
        this.validations = new ValidationsHolder(faqCategorySchema, faqCategorySchemaUpdateSchema);
    }
    protected initializeRoutes(): void {
        //example route to add 
        //this.router.get(`${this.path}/`, this.getData);
        super.initializeRoutes();
    }

    protected getData(req: Request, res: Response, next: NextFunction) {
        let objWhereClauseStatusPart = this.getWhereClauseStatsPart(req);
        return super.getData(req, res, next, [],
            [
                'category_name',
                'faq_category_id',
                [
                    db.literal(`( SELECT COUNT(*) FROM faqs AS s WHERE
                    ${objWhereClauseStatusPart.addWhereClauseStatusPart ? "s." + objWhereClauseStatusPart.whereClauseStatusPartLiteral : objWhereClauseStatusPart.whereClauseStatusPartLiteral}
                    AND s.faq_category_id = \`faq_category\`.\`faq_category_id\`)`), 'faq_count'
                ]
            ], { model: faq, required: false }
        )
    }
}