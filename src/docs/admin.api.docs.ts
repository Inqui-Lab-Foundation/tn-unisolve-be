import { badRequestError, notAcceptableError, notFoundError, unauthorizedError } from "./errors";

export const registration = {
    tags: ['Admins'],
    description: 'Register admin',
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
                            example: 'admin@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Admin User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'ADMIN',
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
                            example: 'admin@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Admin User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'ADMIN',
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
export const login = {
    tags: ['Admins'],
    description: 'Login admin',
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
                            example: 'admin@unisolve.org',
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
                            example: 'admin@unisolve.org',

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
export const changePassword = {
    tags: ['Admins'],
    summary: 'Update admin password',
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
export const logout = {
    tags: ['Admins'],
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
export const admins = {
    tags: ['Admins'],
    description: 'List of registered admin users',
    summary: 'Get admins',
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
export const adminId = {
    tags: ['Admins'],
    description: 'Get admin details by admin_user_id in params',
    summary: 'Get admin by admin_user_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "user_id",
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
