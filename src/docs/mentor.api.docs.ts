import { badRequestError, notAcceptableError, notFoundError, unauthorizedError } from "./errors";

export const mentorChangePasswordRequestBody = {
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

export const mentorLogin = {
    tags: ['Mentors'],
    summary: 'Logs mentor into the system',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'mentor@unisolve.org',

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
                            example: 'metor@unisolve.org',

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
export const mentorRegister = {
    tags: ['Mentors'],
    description: 'Registration for mentor',
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
                            example: 'mentor@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Mentor User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'MENTOR',
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
                            example: 'mentor@unisolve.org',
                            describe: 'mandatory field'
                        },
                        full_name: {
                            type: 'string',
                            example: 'Mentor User',
                            describe: 'mandatory field'
                        },
                        password: {
                            type: 'string',
                            example: '12345678910',
                            describe: 'mandatory field'
                        },
                        role: {
                            type: 'string',
                            example: 'MENTOR',
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
export const mentorChangePassword = {
    tags: ['Mentors'],
    summary: 'Update mentor password',
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
export const mentorUpdatePassword = {
    tags: ['Mentors'],
    summary: 'Update mentor password',
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
export const mentorVerifyUser = {
    tags: ['Mentors'],
    summary: 'Update mentor password',
    description: 'This can only be done by the logged in user.',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        role: {
                            type: 'string',
                            example: 'MENTOR',
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        role: {
                            type: 'string',
                            example: 'MENTOR',
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
export const mentorUpdateMobile = {
    tags: ['Mentors'],
    summary: 'Update mentor password',
    description: 'This can only be done by the logged in user.',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        user_id: {
                            type: 'string',
                            example: '2',
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        user_id: {
                            type: 'string',
                            example: '2',
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
export const mentorResetPassword = {
    tags: ['Mentors'],
    summary: 'Reset mentor password',
    description: 'This can only be done by the logged in user.',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        otp: {
                            type: 'string',
                            example: '223242',
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        mobile: {
                            type: 'string',
                            example: '2214412414',
                        },
                        otp: {
                            type: 'string',
                            example: '223242',
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
export const mentorId = {
    tags: ['Mentors'],
    summary: 'Get mentor by user_id',
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
            description: "mentor_user_id",
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
                                example: 'successfully'
                            }
                        }
                    }
                }
            }
        },
        '401': unauthorizedError
    }
}
export const mentors = {
    tags: ['Mentors'],
    summary: 'Get mentors',
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
export const mentorValidateOtp = {
    tags: ['Mentors'],
    description: 'validate OTP for mentor',
    summary: 'OTP check',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        otp: {
                            type: 'string',
                            example: '242234',
                            describe: 'mandatory field'
                        }
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        otp: {
                            type: 'string',
                            example: '242234',
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
                                example: 'successfully'
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
export const mentorBulkUpload = {
    tags: ['Evaluater'],
    summary: 'mentor bulk add',
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
