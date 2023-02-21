import { badRequestError, unauthorizedError } from "./errors";

export const createSupportTicketsReplies = {
    tags: ['Support tickets replies'],
    summary: 'Add tickets replies',
    description: 'Authentication required to add tickets replies',
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
                        support_ticket_id: {
                            type: 'string',
                            example: '1',
                            describe: 'mandatory field'
                        },
                        reply_details: {
                            type: 'string',
                            example: 'details',
                            describe: 'mandatory field'
                        },
                    },
                },
            },
            'application/x-www-form-urlencoded': {
                schema: {
                    type: 'object',
                    properties: {
                        support_ticket_id: {
                            type: 'string',
                            example: '1',
                            describe: 'mandatory field'
                        },
                        reply_details: {
                            type: 'string',
                            example: 'details',
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
export const supportTicketsRepliesList = {
    tags: ['Support tickets replies'],
    summary: 'List of tickets replies',
    description: 'Gets list of tickets replies created',
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
export const supportTicketsRepliesById = {
    tags: ['Support tickets replies'],
    summary: 'Get tickets reply',
    description: 'Get single tickets reply support_tickets_reply_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'support_tickets_reply_id',
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
export const supportTicketsRepliesByIdUpdate = {
    tags: ['Support tickets replies'],
    summary: 'Update tickets reply',
    description: 'Get single tickets reply support_tickets_reply_id in params',
    security: [
        {
            bearerAuth: [],
        },
    ],
    parameters: [
        {
            in: 'path',
            name: 'support_tickets_reply_id',
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
export const supportTicketsRepliesByIdDelete = {
    tags: ['Support tickets replies'],
    summary: 'Delete tickets reply',
    description: 'Delete single tickets reply support_tickets_reply_id in params',
    parameters: [
        {
            in: 'path',
            name: 'support_tickets_reply_id',
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
