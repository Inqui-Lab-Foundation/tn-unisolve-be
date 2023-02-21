import { badRequestError, unauthorizedError } from "./errors";

export const challengeInitiate = {
    tags: ['Challenges response'],
    summary: 'initiate challenges',
    description: 'initiate a new challenge',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'team_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "team_id required",
        },
        {
            in: 'params',
            name: 'id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "id required",
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        sdg: {
                            type: 'string',
                            example: 'adas',
                        }
                    }
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        sdg: {
                            type: 'string',
                            example: 'adas',
                        }
                    }
                },
            },
        }
    },
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
export const challengeFileUpload = {
    tags: ['Challenges response'],
    summary: 'File upload',
    description: 'File upload',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {
        required: true,
        content: {
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        file: {
                            type: 'file'
                        },
                    },
                },
            },
        }
    },
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
export const challengeSubmittedDetails = {
    tags: ['Challenges response'],
    summary: 'gets challenges',
    description: 'gets the team based on team_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'team_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "team_id required",
        },
        {
            in: 'params',
            name: 'id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "id required",
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
export const challengeUpdateSubmission = {
    tags: ['Challenges response'],
}
export const challengeUpdateEntry = {
    tags: ['Challenges response'],
    summary: 'Update challenge response',
    description: 'Updates single challenge response challenge_response_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'challenge_response_id',
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
                            example: 'SUBMITTED',
                        },
                        team_id: {
                            type: 'string',
                            example: '12',
                        },
                        response: {
                            type: 'object',
                            example: '{}',
                        },
                        evaluated_by: {
                            type: 'string',
                            example: '80',
                        },
                        evaluated_at: {
                            type: 'string',
                            example: '12-22-1232',
                        },
                        sdg: {
                            type: 'string',
                            example: 'something',
                        },
                        others: {
                            type: 'string',
                            example: 'ss',
                        },
                        final_result: {
                            type: 'string',
                            example: 'q',
                        },
                        initiated_by: {
                            type: 'string',
                            example: '12',
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
export const challengeFetchRandom = {
    tags: ['Challenges response'],
    summary: 'Get challenges',
    description: 'Get challenges based on the filter provided in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'evaluator_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "evaluator filter",
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
export const challengeClearResponse = {
    tags: ['Challenges response'],
    summary: 'Delete challenges',
    description: 'Delete the team based on team_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'team_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "team_id required",
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
export const challengeEvaluated = {
    tags: ['Challenges response'],
    summary: 'Get challenges',
    description: 'Get challenges based on the filter provided in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'evaluator_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "evaluator  filter",
        },
        {
            in: 'query',
            name: 'evaluation_status',
            schema: {
                type: 'string',
                example: 'REJECTIONROUND1'
            },
            required: true,
            description: "evaluation status filter",
        },
        {
            in: 'query',
            name: 'rejected_reason',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "rejected reason status",
        },
        {
            in: 'query',
            name: 'status',
            schema: {
                type: 'string',
                example: 'SUBMITTED'
            },
            required: true,
            description: "Status filter",
        },
        {
            in: 'query',
            name: 'district',
            schema: {
                type: 'string',
                example: 'AP'
            },
            required: true,
            description: "district filter",
        },
        {
            in: 'query',
            name: 'sdg',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "sdg filter",
        },
        {
            in: 'query',
            name: 'level',
            schema: {
                type: 'string',
                example: 'L1'
            },
            required: true,
            description: "level filter",
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
export const challengeCustomFilter = {
    tags: ['Challenges response'],
    summary: 'Get challenges',
    description: 'Get challenges based on the filter provided in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'district',
            schema: {
                type: 'string',
                example: 'AP'
            },
            required: true,
            description: "district filter",
        },
        {
            in: 'query',
            name: 'sdg',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "sdg filter",
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
export const challengeDistrictWiseRating = {
    tags: ['Challenges response'],
}
export const challengeEvaluationResult = {
    tags: ['Challenges response'],
    summary: 'Get challenges',
    description: 'Get challenges based on the filter provided in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'evaluator_id',
            schema: {
                type: 'string',
                example: '12'
            },
            required: true,
            description: "evaluator  filter",
        },
        {
            in: 'query',
            name: 'evaluation_status',
            schema: {
                type: 'string',
                example: 'REJECTIONROUND1'
            },
            required: true,
            description: "evaluation status filter",
        },
        {
            in: 'query',
            name: 'rejected_reason',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "rejected reason status",
        },
        {
            in: 'query',
            name: 'status',
            schema: {
                type: 'string',
                example: 'SUBMITTED'
            },
            required: true,
            description: "Status filter",
        },
        {
            in: 'query',
            name: 'district',
            schema: {
                type: 'string',
                example: 'AP'
            },
            required: true,
            description: "district filter",
        },
        {
            in: 'query',
            name: 'sdg',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "sdg filter",
        },
        {
            in: 'query',
            name: 'level',
            schema: {
                type: 'string',
                example: 'L1'
            },
            required: true,
            description: "level filter",
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
export const challengeFinalEvaluation = {
    tags: ['Challenges response'],
    summary: 'Get challenges',
    description: 'Get challenges based on the filter provided in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'query',
            name: 'status',
            schema: {
                type: 'string',
                example: 'SUBMITTED'
            },
            required: true,
            description: "Status filter",
        },
        {
            in: 'query',
            name: 'district',
            schema: {
                type: 'string',
                example: 'AP'
            },
            required: true,
            description: "district filter",
        },
        {
            in: 'query',
            name: 'sdg',
            schema: {
                type: 'string',
                example: 'nothing'
            },
            required: true,
            description: "sdg filter",
        },
        {
            in: 'query',
            name: 'level',
            schema: {
                type: 'string',
                example: 'L1'
            },
            required: true,
            description: "level filter",
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

export const createChallengeResponse = {
    tags: ['Challenges response'],
    summary: 'Add challenge response',
    description: 'Authentication required to add challenge response',
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
                        responses: {
                            type: 'array',
                            example: [
                                {
                                    "challenge_question_id": 9,
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
                                    "challenge_question_id": 9,
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
export const challengeResponseList = {
    tags: ['Challenges response'],
    summary: 'List of challenge response',
    description: 'Gets list of challenge response created',
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
    summary: 'Get challenge',
    description: 'Get single challenge response challenge_response_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'challenge_response_id',
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
export const challengeResponseByIdUpdate = {
    tags: ['Challenges response'],
    summary: 'Update challenge response',
    description: 'Get single challenge response challenge_response_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'challenge_response_id',
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
export const challengeResponseByIdDelete = {

    tags: ['Challenges response'],
    summary: 'Delete challenge response',
    description: 'Delete single challenge challenge_response_id in params',
    parameters: [
        {
            in: 'path',
            name: 'challenge_response_id',
            schema: {
                type: 'integer',
                example: 1
            },
            required: true,
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