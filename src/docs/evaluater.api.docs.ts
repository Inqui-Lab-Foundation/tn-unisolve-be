import { badRequestError, notAcceptableError, notFoundError, unauthorizedError } from "./errors";

export const evaluatorBulkUpload = {
    tags: ['Evaluater'],
    summary: 'Evaluator bulk add',
    description: 'Evaluator bulk add',
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
                            type: 'file',
                            describe: 'mandatory field'
                        }
                    }
                }
            }
        }
    },
    responses: {
        '202': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'string',
                                example: '202'
                            },
                            status_type: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'User password Updated'
                            },
                            count: {
                                type: 'string',
                                example: 'null'
                            },
                            data: {
                                type: 'array',
                                example: [1]
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': notAcceptableError
    }
}
export const evaluatorRegistration = {
    tags: ['Evaluater'],
    description: 'Register evaluator',
    summary: 'Create user',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'evaluator@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Evaluator User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'EVALUATOR',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'evaluator@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Evaluator User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'EVALUATOR',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
        },
    },
    responses: {
        '201': {
            description: 'successful operation',
            content: {
                'application/ json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'number',
                                example: '201'
                            },
                            status_typeL: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'User registered successfully'
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
        '400': badRequestError,
        '406': notAcceptableError
    }
}
export const evaluatorLogin = {
    tags: ['Evaluater'],
    description: 'Login evaluator',
    summary: 'Logs user into the system',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'evaluator@unisolve.org',

                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'evaluator@unisolve.org',

                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                        }
                    },
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'successful operation',
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
                                example: 'login successfully'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: [{ 'token': '', 'type': 'Bearer', 'expire': '3d' }]
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '400': badRequestError
    },

}
export const evaluatorChangePassword = {
    tags: ['Evaluater'],
    summary: 'Update evaluator password',
    description: 'This can only be done by the logged in user.',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        user_id: {
                            type: 'string',
                            example: '2',
                        },
                        oldPassword: {
                            type: 'string',
                            example: '33a4da31c6569c14921f7b068a94b18e',
                        },
                        newPassword: {
                            type: 'string',
                            example: '17d3f297d157cfa29bd7fa04023bc56f',
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        user_id: {
                            type: 'string',
                            example: '2',
                        },
                        oldPassword: {
                            type: 'string',
                            example: '33a4da31c6569c14921f7b068a94b18e',
                        },
                        newPassword: {
                            type: 'string',
                            example: '17d3f297d157cfa29bd7fa04023bc56f',
                        }
                    },
                },
            },
        },
    },
    responses: {
        '202': {
            description: 'successful operation',
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
                                example: 'successfully'
                            },
                            count: {
                                type: 'number',
                                example: 1
                            },
                            data: {
                                type: 'array',
                                example: [1
                                ]
                            }
                        }
                    }
                }
            }
        },
        '400': badRequestError,
        '401': unauthorizedError,
        '404': notFoundError
    },

}
export const evaluatorLogout = {
    tags: ['Evaluater'],
    description: 'Helps clear the session data',
    summary: 'Clear user session',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '202': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'cleared session successfully'
                            }
                        }
                    }
                }
            },
        },
        '401': unauthorizedError
    }
}
export const evaluators = {
    tags: ['Evaluater'],
    description: 'List of registered mentor users',
    summary: 'Get evaluator',
    security: [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        '202': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'string',
                                example: '202'
                            },
                            status_type: {
                                type: 'string',
                                example: 'success'
                            },
                            message: {
                                type: 'string',
                                example: 'Successful'
                            },
                            count: {
                                type: 'string',
                                example: 'null'
                            },
                            data: {
                                type: 'array',
                                example: [1]
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError,
        '404': notAcceptableError
    }
}
export const evaluatorId = {
    tags: ['Evaluater'],
    description: 'Get evaluator details by evaluator_user_id in params',
    summary: 'Get evaluator by evaluator_user_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'evaluator_user_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "evaluator_user_id",
        }
    ],
    responses: {
        '202': {
            description: 'successful operation',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Password updated successfully'
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError
    }
}
