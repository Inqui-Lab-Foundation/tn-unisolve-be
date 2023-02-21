import { badRequestError, notAcceptableError, notFoundError, unauthorizedError } from "./errors";

export const studentChangePasswordRequestBody = {
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
};
export const bulkCreateStudent = {
    tags: ['Students'],
    summary: 'student bulk add',
    describe: 'student bulk add',
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
export const addStudent = {
    tags: ['Students'],
    description: 'add multiple students',
    summary: 'Add students',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        type: 'array',
                        example: ['object', 'object']
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        type: 'array',
                        example: ['object', 'object']
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
                                example: 'successful'
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
export const studentResetPassword = {
    tags: ['Students'],
    summary: 'Reset student password',
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
                            example: '2214412414',
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
                            example: '2214412414',
                        }
                    }
                },
            },
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
export const getBadges = {
    tags: ['Students'],
    summary: 'Get student badges by student_user_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'student_user_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "student_user_id",
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
                                example: 'successful'
                            },
                            count: {
                                type: 'string',
                                example: '1'
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
        '401': unauthorizedError
    }

}
export const addBadges = {
    tags: ['Students'],
    description: 'add Badges',
    summary: 'Create badge for student',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        badge_ids: {
                            type: 'array',
                            example: '[1,2,3]',
                            describe: 'mandatory field'
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        badge_ids: {
                            type: 'array',
                            example: '[1,2,3]',
                            describe: 'mandatory field'
                        }
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
export const studentCertificate = {
    tags: ['Students'],
    description : 'Get student certificate by user_id',
    summary: 'Get certificate',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'student_user_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "student_user_id",
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
                                example: 'successful'
                            },
                            count: {
                                type: 'string',
                                example: '1'
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
        '401': unauthorizedError
    }
}
export const studentRegister = {
    tags: ['Students'],
    description: 'Register student',
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
                            example: 'student@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Student User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'STUDENT',
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
                            example: 'student@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Student User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'STUDENT',
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
export const studentLogin = {
    tags: ['Students'],
    description: 'Login student',
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
                            example: 'student@unisolve.org',

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
                            example: 'student@unisolve.org',

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
export const studentChangePassword = {
    tags: ['Students'],
    summary: 'Update student password',
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
export const studentLogout = {
    tags: ['Students'],
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
export const students = {
    tags: ['Students'],
    summary: 'Get students',
    describe: 'Get resisted students list',
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
                                example: 'successful'
                            },
                            count: {
                                type: 'string',
                                example: '2'
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
export const studentId = {
    tags: ['Students'],
    summary: 'Get student',
    describe: 'Get student by student_user_id',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'student_user_id',
            schema: {
                type: 'integer',
                default: 1
            },
            required: true,
            description: "student_user_id",
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
                                example: 'successful'
                            },
                            count: {
                                type: 'string',
                                example: '1'
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
        '401': unauthorizedError
    }
}