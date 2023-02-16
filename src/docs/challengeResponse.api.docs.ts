import { badRequestError, unauthorizedError } from "./errors";

export const createChallengeRequestBody = {
    type: 'object',
    properties: {
        course_module_id: {
            type: 'string',
            example: '1',
        },
        topic_type_id: {
            type: 'string',
            example: '1',
        },
        topic_type: {
            type: 'string',
            example: 'VIDEO',
        },
        title: {
            type: 'string',
            example: 'video 1',
        }
    }
};
export const challengeUpdatesRequestBody = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            example: 'COMPLETED',
        }
    },
};

export const challengeInitiate = {
    tags: ['Challenges response'],
}
export const challengeFileUpload = {
    tags: ['Challenges response'],
}
export const challengeSubmittedDetails = {
    tags: ['Challenges response'],
}
export const challengeUpdateSubmission = {
    tags: ['Challenges response'],
}
export const challengeUpdateEntry = {
    tags: ['Challenges response'],
}
export const challengeFetchRandom = {
    tags: ['Challenges response'],
}
export const updateEntryChallenge = {
    tags: ['Challenges response'],
}
export const challengeClearResponse = {
    tags: ['Challenges response'],
}
export const challengeEvaluated = {
    tags: ['Challenges response'],
}
export const challengeCustomFilter = {
    tags: ['Challenges response'],
}
export const challengeDistrictWiseRating = {
    tags: ['Challenges response'],
}
export const challengeEvaluationResult = {
    tags: ['Challenges response'],
}
export const challengeFinalEvaluation = {
    tags: ['Challenges response'],
}
export const createChallengeResponse = {
    tags: ['Challenges response'],
    description: 'Endpoint for creating new worksheet',
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
                    $ref: '#/components/schemas/createWorksheetRequestBody'
                },
            },
        },
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
export const challengeResponseList = {
    tags: ['Challenges response'],
    description: 'Endpoint for getting list of Worksheets created',
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
export const challengeResponseById = {
    tags: ['Challenges response'],
    description: 'Endpoint for getting single Worksheets',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'worksheet_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "Add WorksheetId to fetch specify Worksheet",
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
export const challengeResponseByIdUpdate = {
    tags: ['Challenges response'],
    description: 'Endpoint for updating the specific Worksheets',
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
                    $ref: '#/components/schemas/worksheetUpdatesRequestBody'
                },
            },
        },
    },
    parameters: [
        {
            in: 'path',
            name: 'Worksheet_id',
            schema: {
                type: 'integer',
                default: 2
            },
            required: true,
            description: "Add Worksheet_Id to update specify Worksheets",
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
export const challengeResponseByIdDelete = {
    tags: ['Challenges response'],
    description: 'Endpoint for removing a single Worksheet category',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'WorksheetsId',
            schema: {
                type: 'integer',
                default: 2
            },
            required: true,
            description: "Add topicId to delete specify Topics",
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
