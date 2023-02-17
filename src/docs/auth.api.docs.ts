import { badRequestError, notAcceptableError, notFoundError, unauthorizedError } from "./errors";

export const create_dynamicSignupForm = {
    tags: ['Auth'],
    summary: 'Add a file to server',
    description: 'Creating a json file with the fields sent in the body',
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
                        studentName: {
                            type: 'boolean',
                            example: 'true',
                        },
                        email: {
                            type: 'boolean',
                            example: 'true',
                        },
                        phNumber: {
                            type: 'boolean',
                            example: 'false',
                        }
                    },
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'success',
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
                                example: 'Successfully created'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: [
                                    'object'
                                ]
                            }
                        }
                    }
                }
            },
        },
        '401': unauthorizedError,
        '406': notAcceptableError
    }
}
export const get_dynamicSignupForm = {
    tags: ['Auth'],
    summary: 'signup form',
    description: 'Gets signup form file type: JSON',
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
                                example: 'file found'
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
        '401': unauthorizedError
    }
}
export const create_roadMap = {
    tags: ['Auth'],
    summary: 'Add a file to server',
    description: 'Creating a json file with the fields sent in the body',
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
                        teacher: {
                            type: 'object',
                            properties: {
                                registration: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                pre_survey: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                dashboard: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                course: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                teams: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                post_survey: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                }
                            }
                        },
                        student: {
                            type: 'object',
                            properties: {
                                registration: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                pre_survey: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                dashboard: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                course: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                teams: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                },
                                post_survey: {
                                    type: 'object',
                                    example: {
                                        "start_date": "10-10-2022",
                                        "end_date": "13-10-2022"
                                    }
                                }
                            }
                        }
                    }
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'success',
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
                                example: 'Successfully created'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: [
                                    'object'
                                ]
                            }
                        }
                    }
                }
            },
        },
        '401': unauthorizedError,
        '406': notAcceptableError
    }
}
export const get_roadMap = {
    tags: ['Auth'],
    summary: 'roadMap form',
    description: 'Gets signup form file type: JSON',
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
                                example: 'file found'
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
        '401': unauthorizedError
    }
}