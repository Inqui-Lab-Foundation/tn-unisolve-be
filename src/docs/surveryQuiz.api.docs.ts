import { badRequestError, unauthorizedError } from "./errors";

export const quizSurveysResponses = {
    tags: ['Quiz surveys'],
    summary: 'Add Quiz surveys response',
    description: 'Authentication required to add Quiz surveys response ',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Required",
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        responses: {
                            type: 'array',
                            example: [
                                {
                                    "quiz_survey_question_id": 9,
                                    "selected_option": "/assets/challenges\\responses_attachments/challenge_id_1_team_id_12_file_1669714486486_28G8cYLx7Defzszb_7giSem3.png"
                                }
                            ],
                        },
                        status: {
                            type: 'string',
                            example: 'SUBMITTED',
                        }
                    }
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        responses: {
                            type: 'array',
                            example: [
                                {
                                    "quiz_survey_question_id": 9,
                                    "selected_option": "/assets/challenges\\responses_attachments/challenge_id_1_team_id_12_file_1669714486486_28G8cYLx7Defzszb_7giSem3.png"
                                }
                            ],
                        },
                        status: {
                            type: 'string',
                            example: 'SUBMITTED',
                        }
                    }
                },
            },
        }
    },
    responses: {
        '201': {
            description: 'Created',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveysResponse = {
    tags: ['Quiz surveys'],
    summary: 'Add Quiz surveys response',
    description: 'Authentication required to add Quiz surveys response ',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Required",
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        quiz_survey_question_id: {
                            type: 'string',
                            example: '1',
                            describe: 'mandatory field'
                        },
                        selected_option: {
                            type: 'string',
                            example: 'option name',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        quiz_question_id: {
                            type: 'string',
                            example: '1',
                            describe: 'mandatory field'
                        },
                        selected_option: {
                            type: 'string',
                            example: 'option name',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
        }
    },
    responses: {
        '201': {
            description: 'Created',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveysList = {
    tags: ['Quiz surveys'],
    summary: 'List of Quiz surveys',
    description: 'Gets list of Quiz surveys created',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'Success',
            content: {
                'applications/json': {
                    schema: {
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveysById = {
    tags: ['Quiz surveys'],
    summary: 'Get Quiz surveys',
    description: 'Get single Quiz surveys quiz_survey_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Required",
        }
    ],
    responses: {
        '200': {
            description: 'Success',
            content: {
                'applications/json': {
                    schema: {
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveysNextQuestion = {
    tags: ['Quiz surveys'],
    summary: 'Get Quiz surveys Next question',
    description: 'Get single Quiz surveys quiz_survey_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Required",
        }
    ],
    responses: {
        '200': {
            description: 'success',
            content: {
                'application/json': {
                    schema: {
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_type: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveysByIdDelete = {
    tags: ['Quiz surveys'],
    summary: 'Delete Quiz surveys',
    description: 'Delete single Quiz surveys quiz_survey_id in params',
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                example: 1
            },
            required: false,
            description: "Required",
        }
    ],
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'success',
            content: {
                'application/json': {
                    schema: {
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}
export const quizSurveySurveyStatus = {
    tags: ['Quiz surveys'],
    summary: 'Get Quiz surveys status',
    description: 'Get Quiz surveys status based on the role and survey status',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_survey_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Required",
        },
        {
            in: 'query',
            name: 'role',
            schema: {
                type: 'sting',
                default: 1
            },
            required: true,
            description: "Required",
        },
        {
            in: 'query',
            name: 'quizSurveyStatus',
            schema: {
                type: 'string',
                default: 'ALL'
            },
            required: true,
            description: "Required",
        }
    ],
    responses: {
        '200': {
            description: 'Success',
            content: {
                'applications/json': {
                    schema: {
                        properties: {
                            status: {
                                type: 'number',
                                example: '200'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'OK'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: ['object']
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': badRequestError
    }
}