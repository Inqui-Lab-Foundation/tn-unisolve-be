import { badRequestError, unauthorizedError } from "./errors";

export const createQuizQuestion = {
    tags: ['Quiz questions'],
    summary: 'Add Quiz questions',
    description: 'Authentication required to add Quiz questions',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'badge name',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'badge name',
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
export const quizQuestionList = {
    tags: ['Quiz questions'],
    summary: 'List of Quiz questions',
    description: 'Gets list of Quiz questions created',
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
export const quizQuestionById = {
    tags: ['Quiz questions'],
    summary: 'Get Quiz questions',
    description: 'Get single Quiz questions quiz_questions_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_questions_id',
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
export const quizQuestionByIdUpdate = {
    tags: ['Quiz questions'],
    summary: 'Update Quiz question',
    description: 'Get single Quiz questions quiz_questions_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'quiz_questions_id',
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
                        status: {
                            type: 'string',
                            example: 'ACTIVE',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        status: {
                            type: 'string',
                            example: 'ACTIVE',
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
export const quizQuestionByIdDelete = {
    tags: ['Quiz questions'],
    summary: 'Delete Quiz questions',
    description: 'Delete single Quiz questions quiz_questions_id in params',
    parameters: [
        {
            in: 'path',
            name: 'quiz_questions_id',
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