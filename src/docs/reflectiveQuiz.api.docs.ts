import { badRequestError, unauthorizedError } from "./errors";


export const reflectiveQuizNextQuestion = {
    tags: ['Reflective quiz'],
    summary: 'Get Reflective quiz',
    description: 'Authentication required to get Reflective quiz',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'reflective_quiz_id',
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
export const reflectiveQuizResponse = {
    tags: ['Reflective quiz'],
    summary: 'Add reposes for reflective quiz',
    description: 'Get single Reflective quiz reflective_quiz_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'reflective_quiz_id',
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
export const reflectiveQuizList = {
    tags: ['Reflective quiz'],
    summary: 'Get list of Reflective quiz',
    description: 'Get list Reflective quiz',
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
export const reflectiveQuizById = {
    tags: ['Reflective quiz'],
    summary: 'Get reposes for reflective quiz',
    description: 'Get single Reflective quiz reflective_quiz_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'reflective_quiz_id',
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