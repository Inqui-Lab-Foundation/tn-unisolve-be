
export const home = {
    tags: ['Assets'],
    summary: 'Open route',
    description: 'basic route',
    responses: {
        '200': {
            description: 'success',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            'status': {
                                type: 'number',
                                example: '200'
                            },
                            'status_type': {
                                type: 'string',
                                example: 'success'
                            },
                            'apis': {
                                type: 'object',
                                example: {
                                    'docks': 'http://localhost:3002/docs',
                                    'apis': 'http://localhost:3002/api/v1',
                                    'healthcheck': 'http://localhost:3002/healthcheck'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};
export const assets = {
    tags: ['Assets'],
    summary: 'Open route',
    description: 'home route',
    parameters: [
        {
            in: 'path',
            name: 'file_name',
            schema: {
                type: 'string',
                default: '/default/default_worksheet.pdf'
            },
            required: true,
            description: "File to retrieve",
        }
    ],
    responses: {
        '200': {
            description: 'success',
            content: {
                'application/pdf': {
                    schema: {
                        type: 'object',
                        properties: {
                            'status': {
                                type: 'number',
                                example: '200'
                            },
                            'status_type': {
                                type: 'string',
                                example: 'success'
                            },
                            'apis': {
                                type: 'object',
                                example: {
                                    'docks': 'http://localhost:3002/docs',
                                    'apis': 'http://localhost:3002/api/v1',
                                    'healthcheck': 'http://localhost:3002/healthcheck'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};
export const healthCheck = {
    tags: ['Assets'],
    summary: 'Open route',
    description: 'Returns server health',
    responses: {
        '200': {
            description: 'success',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "uptime": 13.9573812,
                            "message": "OK",
                            "DatabaseStatus": "Active",
                            "timestamp": 1652956210898
                        }
                    }
                }
            }
        },
    }
};